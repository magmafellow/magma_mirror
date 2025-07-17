import BaseLayout from '@/components-manual/construct/base-layout/base-layout'
import React from 'react'
import { Locales, getDictionary } from '../dictionaries'
import Index from '.'


type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)

  return (
    <BaseLayout dictionary={dictionary}>
      <Index />
    </BaseLayout>
  )
}
