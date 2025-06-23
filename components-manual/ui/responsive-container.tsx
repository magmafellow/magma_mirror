import React, { FC, ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
}

const ResponsiveContainer: FC<ComponentProps> = ({ children }) => {
  return <div className={`mx-auto w-full lg:max-w-[1024px]`}>{children}</div>
}

export default ResponsiveContainer
