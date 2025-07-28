import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET!

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value
  const pathname = request.nextUrl.pathname

  if (!accessToken) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  try {
    const { payload } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(JWT_SECRET)
    )

    if (pathname.startsWith('/admin') && payload.role !== 'admin') {
      return NextResponse.rewrite(new URL('/404', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error('JWT verification failed:', error)
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}
