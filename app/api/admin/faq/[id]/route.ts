import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { verifyAdminSession } from '@/lib/auth'
import { readData, writeData } from '@/lib/data'
import type { FaqItem } from '@/lib/types'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await request.json() as Partial<FaqItem>
  const faq = await readData<FaqItem[]>('faq.json', [])
  const idx = faq.findIndex(f => f.id === Number(id))
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  faq[idx] = { ...faq[idx], ...body, id: faq[idx].id }
  await writeData('faq.json', faq)
  revalidatePath('/services')
  return NextResponse.json(faq[idx])
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const faq = await readData<FaqItem[]>('faq.json', [])
  const filtered = faq.filter(f => f.id !== Number(id))
  if (filtered.length === faq.length) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  await writeData('faq.json', filtered)
  revalidatePath('/services')
  return NextResponse.json({ success: true })
}
