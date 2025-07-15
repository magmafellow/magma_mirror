import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import IconClose from '../icons/general/icon-close'

const buttonVariants = cva('rounded-[5858px]', {
  variants: {
    size: {
      md: 'p-[9px]',
      sm: 'p-[4px]',
    },
    intent: {
      neutral: 'bg-neutral-bold/50 hover:bg-neutral-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    intent: 'neutral',
  }
})

type Props = {} & React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

export default function ButtonClose({
  className,
  size,
  intent,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn('group', buttonVariants({ intent, size }), className)}
    >
      <IconClose className="fill-neutral-normal size-5 group-hover:fill-neutral-light" />
    </button>
  )
}
