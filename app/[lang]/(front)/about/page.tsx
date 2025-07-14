import BaseLayout from '@/components-manual/blocks/base-layout/base-layout'
import React from 'react'
import { DictionaryLocale, Locales, getDictionary } from '../dictionaries'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Heading from '@/components-manual/ui/heading'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import StackCarousel from './stack-carousel/stack-carousel'

type PageProps = {
  params: Promise<{ lang: string }>
}

const localeParsVars = {
  en: (
    <p className="typo-body-base max-w-[740px]">
      Hello, my name is Alexey Romanov. I’m a developer with a passion for web
      development. Initially, I explored web development casually, but over
      time, I became more serious about honing my skills and fully immersing
      myself in the field. I am continuously learning and actively seeking
      remote or onsite job opportunities. If you need a frontend developer for
      your project, please feel free to{' '}
      <Link href="#" className=" text-accent-normal hover:underline">
        contact
      </Link>{' '}
      me. I would be delighted to assist, as it would provide me with the
      opportunity to further develop my skills and knowledge.
    </p>
  ),
  ru: (
    <p>
      Hello, my name is Alexey Romanov. I’m a developer with a passion for web
      development. Initially, I explored web development casually, but over
      time, I became more serious about honing my skills and fully immersing
      myself in the field. I am continuously learning and actively seeking
      remote or onsite job opportunities. If you need a frontend developer for
      your project, please feel free to contact me. I would be delighted to
      assist, as it would provide me with the opportunity to further develop my
      skills and knowledge.
    </p>
  ),
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params

  const dictionary = await getDictionary(lang as Locales)

  return (
    <BaseLayout dictionary={dictionary}>
      <ResponsiveContainer className="main-grow">
        <main className={`px-3`}>
          <IntroBlock dictionary={dictionary} className="mb-10" />
          <StackBlock dictionary={dictionary} className="mb-10" />
        </main>
      </ResponsiveContainer>
    </BaseLayout>
  )
}

type PropsBlock = {
  className?: string
  dictionary: DictionaryLocale
}

function IntroBlock({ className, dictionary }: PropsBlock) {
  return (
    <div className={cn(className)}>
      <Heading
        className="text-subHeadline mb-5 flex flex-col ilg:flex-row items-center gap-3"
        seo
        order="h1"
      >
        <div className="ilg:hidden overflow-hidden w-[165px] h-[165px] shrink-0 border-2 border-accent-bold bg-gradient-to-tr from-accent-extraLight to-accent-medium rounded-full">
          <img
            className="w-full h-full object-center scale-125 object-cover"
            src="/assets/images/nature/leopard.jpg"
            alt="leopard (magma)"
          />
        </div>
        <div>
          {dictionary.pages.history.main_headline}{' '}
          <Heading className="text-headline" tag="span" seo={false} order="h2">
            {dictionary.pages.history.after_main}
          </Heading>
        </div>
      </Heading>
      <div className="flex items-center gap-6">
        <div className="hidden overflow-hidden ilg:block w-[165px] h-[165px] shrink-0 border-2 border-accent-bold bg-gradient-to-tr from-accent-extraLight to-accent-medium rounded-full">
          <img
            className="w-full h-full object-center scale-125 object-cover"
            src="/assets/images/nature/leopard.jpg"
            alt="leopard (magma)"
          />
        </div>
        {localeParsVars.en}
      </div>
    </div>
  )
}

function StackBlock({ className, dictionary }: PropsBlock) {
  return (
    <div className={cn(className)}>
      <Heading className="text-subHeadline" seo order="h2">
        Stack
      </Heading>
      <div className="relative px-8">
        <StackCarousel />
      </div>
    </div>
  )
}
