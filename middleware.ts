import { NextResponse, NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Get the preferred locale, similar to the above or using a library
// let headers = { 'accept-language': 'en-US,en;q=0.5' }
let locales = ['en', 'ru']
let defaultLocale = 'ru'

function getLocale(request: any | NextRequest) {
  let languages = new Negotiator({ headers: {
    'accept-language': request.headers.get('accept-language')
  }}).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  console.log(`- Method [${request.method}] Time [${new Date().toISOString()}]`)
  
  
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  console.log(request.headers.get('accept-language'))
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // matcher: [
  //   '/((?!_next).*)',
  // ],
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
