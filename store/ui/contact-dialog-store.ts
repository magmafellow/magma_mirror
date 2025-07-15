import { create } from 'zustand'

type ContactDialogStore = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  setOpen: (nextState: boolean) => void
}

export const useContactDialogStore = create<ContactDialogStore>()((set, get) => ({
  open: true,
  onClose: () => set({ open: false }),
  onOpen: () => set({ open: true }),
  setOpen: nextState => set({ open: nextState }),
}))
