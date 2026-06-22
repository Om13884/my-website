import { NextResponse } from 'next/server'

// NOTE: in-memory rate limiting is ineffective on Vercel/serverless (separate processes per request).
// Use Upstash Redis for production. For now this protects local/single-instance deploys.
// In-memory rate limit: 5 submissions per IP per 15 min
const submissions = new Map<string, { count: number; resetAt: number }>()

function checkRate(ip: string): boolean {
  const now = Date.now()
  const entry = submissions.get(ip)
  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (!checkRate(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Field length limits
  const limits: Record<string, number> = {
    firstName: 100, lastName: 100, email: 254, phone: 30,
    company: 200, revenue: 50, service: 100, message: 5000, timeline: 100,
  }
  for (const [field, max] of Object.entries(limits)) {
    if (body[field] && body[field].length > max) {
      return NextResponse.json({ error: `Field '${field}' exceeds maximum length.` }, { status: 400 })
    }
  }

  // Validate required fields (lastName is optional — popup form collects a single name field)
  const required = ['firstName', 'email', 'service', 'message']
  for (const field of required) {
    if (!body[field]?.trim()) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
    }
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL

  if (!webhookUrl) {
    // Webhook not configured yet — log and return success to user
    console.warn('[contact] N8N_WEBHOOK_URL not set. Form data not forwarded.')
    return NextResponse.json({ success: true })
  }

  const payload = {
    firstName:   body.firstName.trim(),
    lastName:    body.lastName.trim(),
    email:       body.email.trim().toLowerCase(),
    phone:       body.phone?.trim() ?? '',
    company:     body.company?.trim() ?? '',
    revenue:     body.revenue?.trim() ?? '',
    service:     body.service.trim(),
    message:     body.message.trim(),
    timeline:    body.timeline?.trim() ?? '',
    submittedAt: new Date().toISOString(),
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000), // 10s timeout
    })

    if (!res.ok) {
      console.error(`[contact] n8n webhook returned ${res.status}`)
    }
  } catch (err) {
    // n8n unreachable — log server-side, still return success to user
    console.error('[contact] Failed to reach n8n webhook:', err)
  }

  return NextResponse.json({ success: true })
}
