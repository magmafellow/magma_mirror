import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <ResponsiveContainer>
      <div>
        <Heading seo order="h1">Component Library</Heading>

        <div className="">
          <Heading seo order="h2">Buttons</Heading>
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default Page
