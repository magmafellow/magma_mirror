import React from 'react'
import { Locales, getDictionary } from './dictionaries'
import BaseLayout from '@/components-manual/blocks/base-layout/base-layout'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Heading from '@/components-manual/ui/heading'
import { Button } from '@/components-manual/ui/button'

type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)

  return (
    <BaseLayout dictionary={dictionary}>
      <ResponsiveContainer className="main-grow">
        <main className="h-[190vh]">
          <div className="flex justify-center mb-10">
            <div className="w-[165px] h-[165px] border-2 border-accent-bold bg-gradient-to-tr from-accent-extraLight to-accent-medium rounded-full"></div>
          </div>
          <Heading className="text-center mb-6" seo order="hero">
            {dictionary.pages.home.welcome_by_magma}
          </Heading>
          <p className="typo-body-base text-center max-w-[540px] mb-8 mx-auto">
            {dictionary.pages.home.magma_description}
          </p>
          <div className='flex flex-col gap-(--gap-lg) max-w-[360px] mx-auto'>
            <Button>{dictionary.pages.home.buttons.who_am_i}</Button>
            <Button variant='secondary'>{dictionary.pages.home.buttons.projects}</Button>
            <Button variant='secondary'>{dictionary.pages.home.buttons.contact}</Button>
          </div>
        </main>
      </ResponsiveContainer>
    </BaseLayout>
  )
}
