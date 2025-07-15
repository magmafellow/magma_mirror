'use client'

import { DictionaryLocale } from '@/app/[lang]/(front)/dictionaries'
import styles from './header.module.scss'
import RabbitLogo from '@/components-manual/icons/rabbit-logo'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useHeaderScrollTransition } from './hooks/use-scroll-transition'
import { useMobileSheetStore } from '@/store/ui/mobile-sheet-store'
import MobileSheet from './mobile-sheet/mobile-sheet'
import { usePathname } from 'next/navigation'

type Props = {
  dictionary: DictionaryLocale
} & React.ComponentProps<'div'>

export default function Header({ dictionary, className, ...props }: Props) {
  const headerRef = useRef<HTMLElement | null>(null)
  const setOpen = useMobileSheetStore(state => state.setOpen)
  const pathname = usePathname()

  useHeaderScrollTransition(headerRef)

  return (
    <>
      <header
        ref={node => {
          headerRef.current = node
        }}
        {...props}
        className={`${styles.header} ${className}`}
      >
        <ResponsiveContainer className={`${styles.header__container}`}>
          <div className={`${styles.logo}`}>
            <RabbitLogo className={`${styles.logo__svg}`} />
          </div>
          <nav className={`${styles.nav}`}>
            <ul className={`${styles.menu}`}>
              <li className={`${styles.menu__item}`}>
                <Link href="/" className={`${styles.menu__link} ${pathname.split('/').length === 2 ? '!text-headline' : ''}`}>
                  {dictionary.header.menu.home}
                </Link>
              </li>
              <li className={`${styles.menu__item}`}>
                <Link href="about" className={`${styles.menu__link} ${pathname.includes('/about') ? '!text-headline' : ''}`}>
                  {dictionary.header.menu.about}
                </Link>
              </li>
              <li className={`${styles.menu__item}`}>
                <Link href="projects" className={`${styles.menu__link} ${pathname.includes('/projects') ? '!text-headline' : ''}`}>
                  {dictionary.header.menu.projects}
                </Link>
              </li>
              <li className={`${styles.menu__item}`}>
                <Link href="contacts" className={`${styles.menu__link} ${pathname.includes('/contacts') ? '!text-headline' : ''}`}>
                  {dictionary.header.menu.contacts}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles.burger}`} onClick={() => setOpen(true)}>
            <div
              className={`${styles.burger__stick} ${styles.burger__stick_01}`}
            ></div>
            <div
              className={`${styles.burger__stick} ${styles.burger__stick_02}`}
            ></div>
            <div
              className={`${styles.burger__stick} ${styles.burger__stick_03}`}
            ></div>
          </div>
        </ResponsiveContainer>
      </header>

      <>
        <MobileSheet />
      </>
    </>
  )
}
