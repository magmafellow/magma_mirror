import { isInParentOrAncestor } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Skeleton } from '@/components/ui/skeleton'
import { usePathname, useRouter } from 'next/navigation'
import {
  LocaleClient,
  SUPPORTED_LOCALES,
  SUPPORTED_LOCALES_CLIENT,
} from '@/lib/constants'
import useLocaleViaPath from '@/hooks/use-locale-via-path'
import { getPreferredLocale } from '@/lib/locale'

type TLocaleBoard = {
  className?: string
}

export function LocaleBoard({ className }: TLocaleBoard) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState<LocaleClient | null>(
    null
  )
  const pathname = usePathname()
  const router = useRouter()
  const localeInPath = useLocaleViaPath()

  const onFaceClickHandler = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      document.body.classList.remove('scroll-locked')
      setIsOpen(false)
    } else {
      document.body.classList.add('scroll-locked')
      setIsOpen(true)
    }
  }

  const onClickLocaleHandler = (locale: string) => {
    if (!SUPPORTED_LOCALES.includes(locale)) {
      throw new Error('Unknown locale has been tried to be selected')
      return
    }
    window.location.href = '/'
    Cookies.set('NEXT_LOCALE', locale)
  }

  // handle determining locale
  useEffect(() => {
    const userPreferredLocale = Cookies.get('NEXT_LOCALE')
    const preferredLocale = getPreferredLocale(Cookies.get('accept-header'))

    console.log('userPreferredLocale: ', userPreferredLocale)
    console.log('preferredLocale: ', preferredLocale)
    console.log('localeInPath: ', localeInPath)

    if (localeInPath) {
      setSelectedLocale(
        SUPPORTED_LOCALES_CLIENT.find(locale => locale.name === localeInPath)!
      )
      return
    }
    if (userPreferredLocale) {
      setSelectedLocale(
        SUPPORTED_LOCALES_CLIENT.find(
          locale => locale.name === userPreferredLocale
        )!
      )
      return
    }
    if (preferredLocale) {
      setSelectedLocale(
        SUPPORTED_LOCALES_CLIENT.find(
          locale => locale.name === preferredLocale
        )!
      )
      return
    }
  }, [pathname, localeInPath])

  // handle overlay
  useEffect(() => {
    if (!isOpen) return
    const onClickOutsiteHandler = (e: MouseEvent) => {
      if (
        !isInParentOrAncestor(
          e.target as Node,
          document.querySelector('.locale-board')
        )
      ) {
        setIsOpen(false)
        document.body.classList.remove('scroll-locked')
      }
    }
    const onKeydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        document.body.classList.remove('scroll-locked')
      }
    }

    window.addEventListener('click', onClickOutsiteHandler)
    window.addEventListener('keydown', onKeydownHandler)

    return () => {
      window.removeEventListener('click', onClickOutsiteHandler)
      window.removeEventListener('keydown', onKeydownHandler)
    }
  }, [isOpen])

  return (
    <>
      <div className={`${className} locale-board relative z-[1001]`}>
        <div
          className="face flex items-center gap-[7px] py-2 px-2.5 rounded-sm border border-body/30 curs-hover"
          onClick={onFaceClickHandler}
        >
          {selectedLocale ? (
            <LocaleItem
              name={selectedLocale.name}
              imgURL={selectedLocale.imgURL}
            />
          ) : (
            <Skeleton className="w-16 h-4 bg-surfaceSoft" />
          )}
        </div>
        <div
          className={`popover duration-150 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } absolute rounded-sm py-1 bg-surface top-[calc(100%+4px)] w-full border border-body/30`}
        >
          <ul className="w-full">
            {SUPPORTED_LOCALES_CLIENT.map(suppLocale => (
              <li
                key={suppLocale.name}
                className="flex justify-center py-1.5 items-center gap-[7px] hover:bg-accent-light/10 curs-hover"
                onClick={() => onClickLocaleHandler(suppLocale.name)}
              >
                <LocaleItem {...suppLocale} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="overlay fixed z-[1000] inset-0 bg-[#000]/50"></div>
      )}
    </>
  )
}

type TLocaleItem = LocaleClient
function LocaleItem({ name, imgURL }: TLocaleItem) {
  return (
    <>
      <img className="w-6 h-auto" src={imgURL} alt="Flag of Russia" />
      <div className="locale-board_delimiter h-4 w-[1px] bg-body"></div>
      <div className="typo-body-bold-sm text-subHeadline uppercase">{name}</div>
    </>
  )
}
