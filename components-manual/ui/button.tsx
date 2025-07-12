import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex text-[#fff] gap-1.5 duration-200 items-center justify-center',
    'outline-transparent',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      intent: {
        accent: '',
        neutral: '',
      },
      size: {
        md: 'px-4 py-3 rounded-sm typo-caption-md outline-2 outline-offset-2',
        sm: 'px-3 py-1.5 rounded-sm typo-caption-sm outline-2 outline-offset-2',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        intent: 'accent',
        class: [
          'bg-accent-semiBold hover:bg-accent-medium focus-visible:outline-accent-light',
          'disabled:bg-neutral-light disabled:text-neutral-preZero',
        ],
      },
      {
        variant: 'secondary',
        intent: 'accent',
        class: [
          'bg-accent-normal/25 hover:bg-accent-normal/50 focus-visible:outline-accent-normal/75',
          'disabled:bg-neutral-black disabled:text-neutral-normal',
        ],
      },

      {
        variant: 'primary',
        intent: 'neutral',
        class: [
          'bg-neutral-bold hover:bg-neutral-semiBold',
          'disabled:bg-neutral-black disabled:text-neutral-normal',
        ],
      },
    ],
  }
)

function Button({
  className,
  variant = 'primary',
  intent = 'accent',
  size = 'md',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, intent, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
