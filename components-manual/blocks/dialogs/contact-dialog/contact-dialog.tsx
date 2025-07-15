'use client'

import { useContactDialogStore } from '@/store/ui/contact-dialog-store'
import './contact-dialog.module.scss'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components-manual/ui/dialog'

type DialogProps = {
  open: boolean
  setOpen: (nextState: boolean) => void
}

export default function ContactDialog() {
  const {open, setOpen} = useContactDialogStore()
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
