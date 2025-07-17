import 'server-only'

export type Locales = 'ru' | 'en' | 'du'

export type DictionaryLocale = {
  hello: string
  header: {
    menu: {
      home: string
      about: string
      projects: string
      contacts: string
    }
  }
  pages: {
    home: {
      welcome_by_magma: string
      magma_description: string

      buttons: {
        who_am_i: string
        projects: string
        contact: string
      }
    }
    history: {
      main_headline: string
      after_main: string
    }
  }
}

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  ru: () => import('./dictionaries/ru.json').then(module => module.default),
  du: () => import('./dictionaries/du.json').then(module => module.default),
}

export const getDictionary = async (locale: Locales) =>
  dictionaries[locale]()
