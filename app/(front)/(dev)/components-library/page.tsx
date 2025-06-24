import Button from '@/components-manual/ui/button'
import Heading from '@/components-manual/ui/heading'
import Input from '@/components-manual/ui/input'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'

import styles from './styles.module.scss'
import Textarea from '@/components-manual/ui/textarea'

const Page = () => {
  return (
    <ResponsiveContainer>
      <div className="py-8">
        <Heading seo order="h1">
          Component Library
        </Heading>

        <div className={styles['component-section']}>
          <Heading seo order="h2">
            Buttons
          </Heading>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <Button>Enable power</Button>
              <Button disabled>Enable power</Button>
              <Button variant="secondary">Enable power</Button>
              <Button disabled variant="secondary">
                Enable power
              </Button>
              <Button intent="neutral">Enable power</Button>
              <Button disabled intent="neutral">
                Enable power
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Enable power</Button>
              <Button disabled size="sm">
                Enable power
              </Button>
              <Button size="sm" variant="secondary">
                Enable power
              </Button>
              <Button disabled size="sm" variant="secondary">
                Enable power
              </Button>
              <Button size="sm" intent="neutral">
                Enable power
              </Button>
              <Button disabled size="sm" intent="neutral">
                Enable power
              </Button>
            </div>
          </div>
        </div>

        <div className={styles['component-section']}>
          <Heading seo order="h2">
            Inputs
          </Heading>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <Input placeholder="Start typing..." />
            </div>
            <div className="flex flex-wrap gap-4"></div>
          </div>
        </div>

        <div className={styles['component-section']}>
          <Heading seo order="h2">
            TextArea
          </Heading>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <Textarea placeholder="Start typing..." />
            </div>
            <div className="flex flex-wrap gap-4"></div>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default Page
