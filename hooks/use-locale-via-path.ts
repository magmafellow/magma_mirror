import { SUPPORTED_LOCALES_CLIENT } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function useLocaleViaPath() {
  const pathname = usePathname()
  
  const localeInPath = SUPPORTED_LOCALES_CLIENT.find(locale =>
    pathname.startsWith(`/${locale.name}`)
  )?.name
  
  return localeInPath
}
