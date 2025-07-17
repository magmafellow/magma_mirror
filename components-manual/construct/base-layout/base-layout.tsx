import styles from './base-layout.module.scss'
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { DictionaryLocale } from '@/app/[lang]/(front)/dictionaries'

type Props = {
  dictionary: DictionaryLocale
  baseHeaderGap?: boolean
} & React.ComponentProps<'div'>

export default function BaseLayout({
  dictionary,
  baseHeaderGap = true,
  children,
}: Props) {

  return (
    <div className={`base-layout__wrapper`}>
      <Header
        dictionary={dictionary}
        className={`${baseHeaderGap ? 'mb-4 imd:mb-6 ilg:mb-8 icontainer:mb-10' : ''}`}
      />
      {children}
      <Footer />
    </div>
  )
}
