import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import styles from './footer.module.scss'
import React from 'react'

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <ResponsiveContainer className={`${styles.footer__container}`}>
        footer
      </ResponsiveContainer>
    </footer>
  )
}
