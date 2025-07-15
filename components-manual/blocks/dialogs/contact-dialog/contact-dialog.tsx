'use client'

import { useContactDialogStore } from '@/store/ui/contact-dialog-store'
import './contact-dialog.module.scss'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components-manual/ui/dialog'
import { Button } from '@/components-manual/ui/button'

type DialogProps = {
  open: boolean
  setOpen: (nextState: boolean) => void
}

const contacts = {
  telegram: '@polrekost',
  phoneNumber: '+79269393457',
  mail: 'magmafellow@gmail.com'
}

export default function ContactDialog() {
  const { open, setOpen } = useContactDialogStore()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contacts</DialogTitle>
          <DialogDescription>
            Ways how to get in touch with me
          </DialogDescription>
        </DialogHeader>
        <div className='dialog_content mb-2'>
          <ul className='flex flex-col gap-1 text-accent-normal'>
            <li>{contacts.telegram}</li>
            <li>{contacts.phoneNumber}</li>
            <li>{contacts.mail}</li>
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant='secondary' className='w-full mx-auto'>
            I see
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
