import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <ResponsiveContainer>
      <div>
        <Heading seo order="h1">Component Library</Heading>

        <div className="">
          <Heading seo order="h2">Buttons</Heading>
          <div>
            <Button>hello</Button>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default Page
