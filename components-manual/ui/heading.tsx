import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, JSX, ReactNode } from 'react'

const heading = cva(
  ['text-headline', ''],
  {
    variants: {
      order: {
        hero: 'typo-head-hero leading-[1.15] mb-[0.5em]',
        h1: 'typo-head-1 leading-[1.2] mb-[0.5em]',
        h2: 'typo-head-2 leading-[1.2] mb-[0.5em]',
        h3: 'typo-head-3 leading-[1.25] mb-[0.65em]',
        h4: 'ttypo-head-4 leading-[1.3] mb-[0.75em]',
      },
    },
  }
)

type HeadingProps = VariantProps<typeof heading>

type ComponentProps = {
  seo?: boolean
} & HeadingProps &
  React.ComponentProps<'div'>

const Heading: FC<ComponentProps> = ({
  order,
  children,
  seo = false,
  className,
}) => {
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

  return (
    <DynamicTag className={cn(heading({ order }), className)}>
      {children}
    </DynamicTag>
  )
}

export default Heading
