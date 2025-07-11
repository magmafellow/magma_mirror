import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <ResponsiveContainer>
          <div className='flex gap-4 items-center'>
            <div>
              <Heading order='h1'>Title 1</Heading>
              <p className='text-accent-black'>Hello there</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default page