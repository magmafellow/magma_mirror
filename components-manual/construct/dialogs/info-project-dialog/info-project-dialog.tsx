'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components-manual/ui/dialog'
import { useInfoProjectStore } from '@/store/ui/info-project-dialog-store'
import { Button } from '@/components-manual/ui/button'

type DialogProps = {
  open: boolean
  setOpen: (nextState: boolean) => void
}

export default function InfoProjectDialog() {
  const { open, setOpen, data } = useInfoProjectStore()

  if (!data) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.name}</DialogTitle>
        </DialogHeader>
        <div className="dialog_content mb-2">
          <p>{data.description}</p>
        </div>
        <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            variant="secondary"
            className="w-full mx-auto"
          >
            I see
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
