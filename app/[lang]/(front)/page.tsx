import React from 'react'
import { Locales, getDictionary } from './dictionaries'
import BaseLayout from '@/components-manual/blocks/base-layout/base-layout'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Heading from '@/components-manual/ui/heading'
import { Button } from '@/components-manual/ui/button'
import Link from 'next/link'

type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)

  return (
    <BaseLayout dictionary={dictionary}>
      <ResponsiveContainer className="main-grow px-3">
        <main className="h-[190vh]">
          <div className="flex justify-center mb-10">
            <FaceBall />
          </div>
          <Heading className="text-center mb-6" seo order="hero">
            {dictionary.pages.home.welcome_by_magma}
          </Heading>
          <p className="typo-body-base text-center max-w-[540px] mb-8 mx-auto">
            {dictionary.pages.home.magma_description}
          </p>
          <div className="flex flex-col gap-(--gap-lg) max-w-[360px] mx-auto">
            <Button asChild>
              <Link href="/about">{dictionary.pages.home.buttons.who_am_i}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/projects">{dictionary.pages.home.buttons.projects}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contacts">{dictionary.pages.home.buttons.contact}</Link>
            </Button>
          </div>
        </main>
      </ResponsiveContainer>
    </BaseLayout>
  )
}

function FaceBall() {
  return (
    <div className="w-[165px] h-[165px] overflow-hidden border-2 border-accent-bold bg-gradient-to-tr from-accent-extraLight to-accent-medium rounded-full">
      <img
        className="w-full h-full object-center scale-125 object-cover"
        src="/assets/images/nature/leopard.jpg"
        alt="leopard (magma)"
      />
    </div>
  )
}
