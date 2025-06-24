import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, JSX, ReactNode } from 'react'

const input = cva(
  [
    'border duration-300 py-3.5 px-3 rounded-sm_m focus:dark:border-vector focus:outline-none',
    'ring-offset-page ring-offset-2 focus:ring-2 focus:ring-accent-normal/50',
    'dark:bg-neutral-solid dark:border-neutral-extraBold hover:dark:border-neutral-normal',
    'dark:placeholder:text-neutral-normal dark:text-neutral-normal dark:hover:text-neutral-preZero',
    'dark:focus:text-neutral-preZero'
  ],
  {
    variants: {},
  }
)

type CVAInputProps = VariantProps<typeof input>
type InputProps = React.InputHTMLAttributes<HTMLInputElement>

type ComponentProps = {} & CVAInputProps & InputProps

const Input: FC<ComponentProps> = ({ className, ...props }) => {
  return <input className={cn(className, input({}))} {...props} />
}

export default Input
