import { cn } from '@/lib/utils'
import React from 'react'

type Props = {} & React.ComponentProps<'button'>

export default function CloseButton({ className, ...props }: Props) {
  return (
    <button {...props} className={cn(className)}>
      CloseButton
    </button>
  )
}
