import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { FC, JSX, ReactNode } from 'react'

import styles from './textarea.module.scss'

const textarea = cva(
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

type CVATextareaProps = VariantProps<typeof textarea>
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

type ComponentProps = {} & CVATextareaProps & TextareaProps

const Textarea: FC<ComponentProps> = ({ className, ...props }) => {
  return <textarea cols={70} rows={10} className={cn(className, textarea({}), styles['textarea'])} {...props} />
}

export default Textarea
