import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, JSX, ReactNode } from 'react'

const heading = cva(['font-bold', 'font-(family-name:--font-noto-sans)'], {
  variants: {
    order: {
      hero: 'text-[60px] leading-[1.15] mb-[0.5em]',
      h1: 'text-4xl leading-[1.2] mb-[0.5em]',
      h2: 'text-3xl leading-[1.2] mb-[0.5em]',
      h3: 'text-2xl leading-[1.25] mb-[0.65em]',
      h4: 'text-xl leading-[1.3] mb-[0.75em]',
    },
  },
})

type HeadingProps = VariantProps<typeof heading>

type ComponentProps = {
  children: ReactNode
  seo?: boolean
} & HeadingProps

const Heading: FC<ComponentProps> = ({ order, children, seo = false }) => {
  let tag = ''
  switch (order) {
    case 'h1':
      tag = 'h1'
      break
    case 'hero':
      tag = 'h1'
      break
    case 'h2':
      tag = 'h2'
      break
    case 'h3':
      tag = 'h3'
      break
    case 'h4':
      tag = 'h4'
      break
    default:
      tag = 'h1'
      throw new Error('Error. We could not define tag!')
      // break
  }

  const DynamicTag = (seo ? tag : 'div') as keyof JSX.IntrinsicElements

  return <DynamicTag className={heading({ order })}>{children}</DynamicTag>
}

export default Heading
