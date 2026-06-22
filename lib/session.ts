export const COOKIE_NAME = 'nxf_admin'
const DURATION_MS = 7 * 24 * 60 * 60 * 1000

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET env var is not set')
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function hexToBuf(hex: string): Uint8Array {
  const pairs = hex.match(/.{2}/g) ?? []
  return new Uint8Array(pairs.map(h => parseInt(h, 16)))
}

export async function createSessionToken(): Promise<string> {
  const ts = Date.now().toString()
  const key = await getKey()
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts))
  return `${ts}.${bufToHex(sig)}`
}

export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const dot = token.indexOf('.')
    if (dot === -1) return false
    const ts = token.slice(0, dot)
    const sigHex = token.slice(dot + 1)
    const tsNum = parseInt(ts, 10)
    if (isNaN(tsNum) || Date.now() - tsNum > DURATION_MS) return false
    const key = await getKey()
    const sigBytes = hexToBuf(sigHex)
    return await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(ts))
  } catch {
    return false
  }
}
