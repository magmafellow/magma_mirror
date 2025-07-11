import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'
import styles from './components-library.module.scss'
import { Button } from '@/components-manual/ui/button'
import { Input } from '@/components-manual/ui/input'

const Page = () => {
  return (
    <ResponsiveContainer>
      <div className={styles.container}>
        <Heading seo order="h1">
          Component Library
        </Heading>
        <div className={styles.section}>
          <Heading seo order="h2">
            Buttons
          </Heading>
          <div className={styles.section__inner}>
            <Button>Enable power</Button>
            <Button variant="secondary">Enable strength</Button>
            <Button intent="neutral">Enable strength</Button>
            <Button disabled>Enable power</Button>
            <Button disabled variant="secondary">
              Enable strength
            </Button>
            <Button disabled intent="neutral">
              Enable strength
            </Button>
          </div>
          <div className={styles.section__inner}>
            <Button size="sm">Enable power</Button>
            <Button size="sm" variant="secondary">
              Enable strength
            </Button>
            <Button size="sm" intent="neutral">
              Enable strength
            </Button>
            <Button disabled size="sm">
              Enable power
            </Button>
            <Button disabled size="sm" variant="secondary">
              Enable strength
            </Button>
            <Button disabled size="sm" intent="neutral">
              Enable strength
            </Button>
          </div>
        </div>
        <div className={styles.section}>
          <Heading seo order="h2">
            Dropdown Lists
          </Heading>
          <div className={styles.section__inner}>

          </div>
        </div>
        <div className={styles.section}>
          <Heading seo order="h2">
            Inputs
          </Heading>
          <div className={styles.section__inner}>
            <Input />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default Page
