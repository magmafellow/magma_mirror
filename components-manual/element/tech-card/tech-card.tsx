import IconRefresh from '@/components-manual/icons/icon-refresh'
import styles from './tech-card.module.scss'
import React, { useState } from 'react'
import { Slot } from '@radix-ui/react-slot'
import Heading from '@/components-manual/ui/heading'
import Link from 'next/link'

type Props = {
  name: string
  libraryURL?: string
  description: string
} & React.ComponentProps<'div'>

export default function TechCard({ children, name, libraryURL, description }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleRefresh = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`tech-card_outer group hover:border-vector border duration-150 overflow-hidden relative w-[268px] h-[313px] border-surface bg-surface rounded-xl`}
    >
      <div
        className={`${
          isFlipped ? 'opacity-0 invisible' : 'opacity-100 visible'
        } tech-card_preview h-full flex justify-center items-center`}
      >
        <div className="flex justify-between items-center absolute top-0 left-0 w-full px-4 pt-4">
          <div className="typo-body-base !font-bold !text-headline">{name}</div>
          <button className="cursor-pointer" onClick={handleRefresh}>
            <IconRefresh
              className={`duration-300 ${
                isFlipped ? 'rotate-0' : 'rotate-180'
              } fill-headline`}
            />
          </button>
        </div>
        <Link href={libraryURL ? libraryURL : '#'} className='duration-150 group-hover:scale-110'>{children}</Link>
      </div>
      <div
        className={`${
          isFlipped ? 'opacity-100 visible' : 'opacity-0 invisible'
        } tech-card_overlay absolute overflow-auto inset-0 bg-surface`}
      >
        <div className="flex justify-between px-4 mb-2.5 pt-4">
          <Slot children={children} className="w-9 h-9 relative z-[100]"></Slot>
          {/* {children} */}
          <Heading seo={false} order="h4" className="mb-0 flex items-center">
            {name}
          </Heading>
          <button className="cursor-pointer" onClick={handleRefresh}>
            <IconRefresh
              className={`duration-300 ${
                isFlipped ? 'rotate-180' : 'rotate-0'
              } fill-headline`}
            />
          </button>
        </div>
        <div className="h-[1px] w-full bg-body/50 mb-3"></div>
        <p className="px-4 typo-body-sm pb-3 !text-subHeadline">{description}</p>
      </div>
    </div>
  )
}
