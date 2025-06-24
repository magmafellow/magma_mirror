import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import React, { FC, JSX, ReactNode } from 'react'

const button = cva(
  [
    'duration-300 cursor-pointer inline-flex items-center justify-center',
    'font-(family-name:--font-noto-sans) text-neutral-white hover:text-neutral-white',
    'font-semibold rounded-[12px] ring-offset-page focus:border-none focus:outline-none ring-offset-2 focus:ring-2',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        md: 'text-sm px-4 py-3 gap-2',
        sm: 'text-xs px-3 py-1.5 gap-1',
      },
      variant: {
        primary: '',
        secondary: '',
      },
      intent: {
        accent: '',
        neutral: '',
      },
    },
    compoundVariants: [
      {
        intent: 'accent',
        variant: 'primary',
        class: [
          'bg-accent-semiBold focus:ring-accent-light hover:bg-accent-medium',
          'disabled:bg-neutral-light',
        ],
      },
      {
        intent: 'accent',
        variant: 'secondary',
        class: [
          'bg-accent-normal/25 focus:ring-accent-normal/75 hover:bg-accent-normal/50',
          'disabled:bg-neutral-black',
        ],
      },
      {
        intent: 'neutral',
        variant: 'primary',
        class: [
          'bg-neutral-bold focus:ring-neutral-normal hover:bg-neutral-semiBold disabled:bg-neutral-extraLight',
          'disabled:bg-neutral-extraLight',
        ],
      },
    ],
  }
)

type CVAButtonProps = VariantProps<typeof button>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ComponentProps = {
  children: ReactNode
  icon?: ReactNode
} & CVAButtonProps &
  ButtonProps

const Button: FC<ComponentProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  intent = 'accent',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(button({ variant, intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
