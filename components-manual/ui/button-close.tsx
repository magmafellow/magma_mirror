import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import IconClose from '../icons/general/icon-close'

const buttonVariants = cva(
  'rounded-[5858px] curs-hover duration-200 outline-transparent outline-2 outline-offset-2 focus-visible:outline-neutral-normal/50',
  {
    variants: {
      size: {
        md: 'p-[9px]',
        sm: 'p-[4px]',
        dynamic: 'p-[4px] md:p-[6px] lg:p-[9px]',
      },
      intent: {
        neutral: 'bg-neutral-bold/50 hover:bg-neutral-bold',
      },
    },
    defaultVariants: {
      size: 'md',
      intent: 'neutral',
    },
  }
)

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
      <IconClose
        className={`fill-neutral-normal ${
          size === 'dynamic' ? '!size-3 md:!size-4 lg:!size-5' : 'size-5'
        }  group-hover:fill-neutral-light`}
      />
    </button>
  )
}
