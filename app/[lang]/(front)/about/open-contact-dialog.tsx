'use client'

import { useContactDialogStore } from '@/store/ui/contact-dialog-store'
import React from 'react'

type Props = {
  text: string
} & React.ComponentProps<'div'>

export default function OpenContactDialog({ text, className }: Props) {
  const { onOpen } = useContactDialogStore()

  return <span className={className} onClick={onOpen}>{text}</span>
}
