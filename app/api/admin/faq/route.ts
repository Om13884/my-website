import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { verifyAdminSession } from '@/lib/auth'
import { readData, writeData } from '@/lib/data'
import type { FaqItem } from '@/lib/types'

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const faq = await readData<FaqItem[]>('faq.json', [])
  return NextResponse.json(faq)
}

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json() as Omit<FaqItem, 'id'>
  const faq = await readData<FaqItem[]>('faq.json', [])
  const maxId = faq.reduce((m, f) => Math.max(m, f.id), 0)
  const item: FaqItem = { ...body, id: maxId + 1 }
  await writeData('faq.json', [...faq, item])
  revalidatePath('/services')
  return NextResponse.json(item, { status: 201 })
}
