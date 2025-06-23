import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type ComponentProps = {
  children: ReactNode
}

const Providers: FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider storageKey='nextTheme' attribute='class'>{children}</ThemeProvider>
    </>
  )
}

export default Providers
