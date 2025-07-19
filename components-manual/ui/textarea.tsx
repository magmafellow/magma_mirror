import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      style={{
        transition: '200ms all, 0ms height, 0ms width'
      }}
      className={cn(
        'bg-neutral-solid outline-2 outline-offset-2 border outline-none text-neutral-light border-neutral-extraBold rounded-sm py-3.5 px-3',
        'hover:border-neutral-normal focus:bg-surface',
        'focus:text-neutral-preZero focus:border-neutral-normal focus-visible:outline-neutral-normal/50',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
