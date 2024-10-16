import { NextRequest, NextResponse } from 'next/server'

const routes = ['/sign-in', '/forgot-password', '/create-account']

export default function middleware(request: NextRequest) {
  const account = request.cookies.get('account')?.value
  const token = JSON.parse(account || '{}')?.accessToken

  const signInURL = new URL('/sign-in', request.url)
  const userListURL = new URL('/user-list', request.url)

  if (!token) {
    if (routes.includes(request.nextUrl.pathname)) {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInURL)
  }

  if (routes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(userListURL)
  }
}

export const config = {
  matcher: [
    '/sign-in/:path*',
    '/forgot-password/:path*',
    '/create-account/:path*',
    '/authenticated/:path*',
    '/user-list/:path*',
    '/dashboard/:path*',
    '/tickets/:path*'
  ]
}
