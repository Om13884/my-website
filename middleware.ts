import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken, COOKIE_NAME } from '@/lib/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Tag ALL /admin/* requests so the root layout can hide public chrome
  const reqHeaders = new Headers(request.headers)
  reqHeaders.set('x-is-admin', 'true')

  // Login page is always accessible
  if (pathname === '/admin/login') {
    return NextResponse.next({ request: { headers: reqHeaders } })
  }

  // All other /admin/* routes require a valid session
  const token = request.cookies.get(COOKIE_NAME)?.value
  if (!token || !(await verifySessionToken(token))) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next({ request: { headers: reqHeaders } })
}

export const config = {
  matcher: '/admin/:path*',
}
