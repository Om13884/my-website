import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { verifyAdminSession } from '@/lib/auth'
import { readData, writeData } from '@/lib/data'
import type { Project } from '@/lib/types'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await request.json() as Partial<Project>
  const projects = await readData<Project[]>('projects.json', [])
  const idx = projects.findIndex(p => p.id === Number(id))
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  projects[idx] = { ...projects[idx], ...body, id: projects[idx].id }
  await writeData('projects.json', projects)
  revalidatePath('/portfolio')
  return NextResponse.json(projects[idx])
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const projects = await readData<Project[]>('projects.json', [])
  const filtered = projects.filter(p => p.id !== Number(id))
  if (filtered.length === projects.length) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  await writeData('projects.json', filtered)
  revalidatePath('/portfolio')
  return NextResponse.json({ success: true })
}
