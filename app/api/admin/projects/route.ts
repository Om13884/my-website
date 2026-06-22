import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { verifyAdminSession } from '@/lib/auth'
import { readData, writeData } from '@/lib/data'
import type { Project } from '@/lib/types'

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const projects = await readData<Project[]>('projects.json', [])
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json() as Omit<Project, 'id'>
  const projects = await readData<Project[]>('projects.json', [])
  const maxId = projects.reduce((m, p) => Math.max(m, p.id), 0)
  const project: Project = { ...body, id: maxId + 1 }
  await writeData('projects.json', [...projects, project])
  revalidatePath('/portfolio')
  return NextResponse.json(project, { status: 201 })
}
