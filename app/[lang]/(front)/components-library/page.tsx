import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'
import styles from './components-library.module.scss'
import { Button } from '@/components-manual/ui/button'
import { Input } from '@/components-manual/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components-manual/ui/select'

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
            Selects
          </Heading>
          <div className={styles.section__inner}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="melon">Melon</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
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
