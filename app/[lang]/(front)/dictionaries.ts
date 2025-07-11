import 'server-only'

export type Locales = 'ru' | 'en'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  ru: () => import('./dictionaries/ru.json').then(module => module.default),
}

export const getDictionary = async (locale: 'en' | 'ru') =>
  dictionaries[locale]()
