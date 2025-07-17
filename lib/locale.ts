import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./constants"

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