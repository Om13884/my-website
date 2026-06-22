import 'server-only'
import { cookies } from 'next/headers'
import { verifySessionToken, COOKIE_NAME } from './session'

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const store = await cookies()
    const token = store.get(COOKIE_NAME)?.value
    if (!token) return false
    return verifySessionToken(token)
  } catch {
    return false
  }
}
