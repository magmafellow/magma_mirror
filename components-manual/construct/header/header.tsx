'use client'

import { DictionaryLocale } from '@/app/[lang]/(front)/dictionaries'
import styles from './header.module.scss'
import RabbitLogo from '@/components-manual/icons/rabbit-logo'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useHeaderScrollTransition } from './hooks/use-scroll-transition'
import { useMobileSheetStore } from '@/store/ui/mobile-sheet-store'
import MobileSheet from './mobile-sheet/mobile-sheet'
import { usePathname } from 'next/navigation'
import { isInParentOrAncestor } from '@/lib/utils'
import { createPortal } from 'react-dom'
import { LocaleBoard } from '../locale-board/locale-board'
import useLocaleViaPath from '@/hooks/use-locale-via-path'

type Props = {
  dictionary: DictionaryLocale
} & React.ComponentProps<'div'>

export default function Header({ dictionary, className, ...props }: Props) {
  const headerRef = useRef<HTMLElement | null>(null)
  const setOpen = useMobileSheetStore(state => state.setOpen)
  const pathname = usePathname()
  const localeInPath = useLocaleViaPath()

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
          <Link href="/" className={`${styles.logo}`}>
            <RabbitLogo className={`${styles.logo__svg}`} />
          </Link>

          <div className="right flex items-center gap-5">
            <nav className={`${styles.nav}`}>
              <ul className={`${styles.menu}`}>
                <li className={`${styles.menu__item}`}>
                  <Link
                    href='/'
                    className={`${styles.menu__link} ${
                      pathname.split('/').length === 2 ? '!text-headline' : ''
                    }`}
                  >
                    {dictionary.header.menu.home}
                  </Link>
                </li>
                <li className={`${styles.menu__item}`}>
                  <Link
                    href="about"
                    className={`${styles.menu__link} ${
                      pathname.includes('/about') ? '!text-headline' : ''
                    }`}
                  >
                    {dictionary.header.menu.about}
                  </Link>
                </li>
                <li className={`${styles.menu__item}`}>
                  <Link
                    href="projects"
                    className={`${styles.menu__link} ${
                      pathname.includes('/projects') ? '!text-headline' : ''
                    }`}
                  >
                    {dictionary.header.menu.projects}
                  </Link>
                </li>
                <li className={`${styles.menu__item}`}>
                  <Link
                    href="contacts"
                    className={`${styles.menu__link} ${
                      pathname.includes('/contacts') ? '!text-headline' : ''
                    }`}
                  >
                    {dictionary.header.menu.contacts}
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={`buger ${styles.burger}`}
              onClick={() => setOpen(true)}
            >
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
            <LocaleBoard className='hidden imd:block' />
          </div>
        </ResponsiveContainer>
      </header>

      <>
        <MobileSheet />
      </>
    </>
  )
}
