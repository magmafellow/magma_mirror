

export type LocaleClient = {
  name: string
  imgURL: string
}
export const SUPPORTED_LOCALES_CLIENT: LocaleClient[] = [
  { name: 'en', imgURL: '/assets/icons/flags/uk.svg' },
  { name: 'ru', imgURL: '/assets/icons/flags/rus.svg' },
  { name: 'du', imgURL: '/assets/icons/flags/german.svg' },
]

export const DEFAULT_LOCALE_CLIENT = 'ru'


export const SUPPORTED_LOCALES = ['en', 'ru', 'du']
export const DEFAULT_LOCALE = 'ru'
