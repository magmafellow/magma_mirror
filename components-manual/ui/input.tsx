import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'bg-neutral-solid duration-200 outline-2 outline-offset-2 border outline-transparent text-neutral-light border-neutral-extraBold rounded-sm h-[45px] px-3',
        'hover:border-neutral-normal',
        'focus:text-neutral-preZero focus:border-neutral-normal focus:outline-neutral-normal/50',
        className
      )}
      {...props}
    />
  )
}

export { Input }
