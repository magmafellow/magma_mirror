import React from 'react'
import { Locales, getDictionary } from './dictionaries'

type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)
  
  return <div>{dictionary.hello}</div>
}
