import BaseLayout from '@/components-manual/blocks/base-layout/base-layout'
import React from 'react'
import { DictionaryLocale, Locales, getDictionary } from '../dictionaries'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import Heading from '@/components-manual/ui/heading'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import StackCarousel from './stack-carousel/stack-carousel'
import { Button } from '@/components-manual/ui/button'
import IconArrowRight from '@/components-manual/icons/nav/icon-arrow-right'
import ContactDialog from '@/components-manual/blocks/dialogs/contact-dialog/contact-dialog'
import OpenContactDialog from './open-contact-dialog'

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
      <OpenContactDialog
        className="link text-accent-normal curs-hover"
        text="contact"
      />{' '}
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
          <SocialsBlock dictionary={dictionary} className="mb-10" />
          <ExploreMyProjectsBlock dictionary={dictionary} className="mb-24" />
        </main>
      </ResponsiveContainer>

      <div>
        <ContactDialog />
      </div>
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

function SocialsBlock({ className, dictionary }: PropsBlock) {
  return (
    <div className={cn(className)}>
      <Heading className="text-subHeadline" seo order="h2">
        Socials
      </Heading>
      <Socials />
    </div>
  )
}

function Socials() {
  const socials = [
    {
      name: 'Github',
      url: 'https://github.com/magmafellow',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/polrekost',
    },
    {
      name: 'Gmail',
      url: 'magmafellow@gmail.com',
    },
  ]

  return (
    <div className="bg-surface overflow-auto py-4 rounded-xl px-6 max-w-[473px]">
      <ul className="flex flex-col gap-2">
        {socials.map(social => (
          <li key={social.name} className="flex items-center gap-2">
            <div className="typo-body-bold-sm">{social.name}</div>
            <span>-</span>
            <Link className='link' href={social.url}>{social.url}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExploreMyProjectsBlock({ dictionary, className }: PropsBlock) {
  return (
    <div className={cn(className)}>
      <Heading className="text-subHeadline mb-3" seo order="h2">
        Explore my projects
      </Heading>
      <p className="mb-6">
        Every projects is built on technologies from list above.
      </p>
      <Button asChild className="w-full max-w-[360px] gap-2 group">
        <Link href="./projects">
          <span>Checkout</span>
          <IconArrowRight className="fill-[#fff] duration-150 group-hover:translate-x-2.5 size-5" />
        </Link>
      </Button>
    </div>
  )
}
