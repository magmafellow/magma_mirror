import { cn } from '@/lib/utils'
import React from 'react'

type TChip = {
  text: string
} & React.ComponentProps<'div'>

export default function Chip({ className, text, ...props }: TChip) {
  return (
    <div
      {...props}
      className={cn(
        `rounded-xl font-medium hover:bg-surfaceSoft/80 text-headline py-3 px-4 bg-surfaceSoft`,
        className
      )}
    >
      {text}
    </div>
  )
}
