import { cn } from '@/lib/utils'
import React, { FC, ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
} & React.ComponentProps<'div'>

const ResponsiveContainer: FC<ComponentProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn([
        `mx-auto w-full imd:max-w-[var(--breakpoint-imd)] ilg:max-w-[var(--breakpoint-ilg)]`,
        `icontainer:max-w-[var(--breakpoint-icontainer)]`,
        `rounded-b-2xl`,
        className
      ])}
    >
      {children}
    </div>
  )
}

export default ResponsiveContainer
