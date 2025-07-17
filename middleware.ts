import { NextResponse, NextRequest } from 'next/server'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './lib/constants'

// Get the preferred locale, similar to the above or using a library
// let headers = { 'accept-language': 'en-US,en;q=0.5' }

export function getPreferredLocale(acceptLangHeader: string | null | undefined) {
  if (!acceptLangHeader) return DEFAULT_LOCALE

  const preferred = acceptLangHeader.split(',').map(part => {
    const [lang] = part.split(';')
    return lang.trim().toLowerCase()
  })

  for (const lang of preferred) {
    const baseLang = lang.split('-')[0]
    if (SUPPORTED_LOCALES.includes(baseLang)) return baseLang
  }

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  console.log(`- Method [${request.method}] Time [${new Date().toISOString()}]`)

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  console.log(request.headers.get('accept-language'))
  let compLocale = getPreferredLocale(request.headers.get('accept-language'))
  const cookieLang = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang)) {
    compLocale = cookieLang
  }
  request.nextUrl.pathname = `/${compLocale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // matcher: [
  //   '/((?!_next).*)',
  // ],
  matcher: [
    '/((?!api|assets|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
