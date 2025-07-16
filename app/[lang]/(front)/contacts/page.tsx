import BaseLayout from '@/components-manual/construct/base-layout/base-layout'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'
import { Locales, getDictionary } from '../dictionaries'
import Heading from '@/components-manual/ui/heading'

type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)

  return (
    <BaseLayout dictionary={dictionary}>
      <ResponsiveContainer className="main-grow">
        <Heading seo order="h1">
          Contacts
        </Heading>
      </ResponsiveContainer>
    </BaseLayout>
  )
}
