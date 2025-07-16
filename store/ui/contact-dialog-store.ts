import { create } from 'zustand'

type TContactDialogStore = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  setOpen: (nextState: boolean) => void
}

export const useContactDialogStore = create<TContactDialogStore>()((set, get) => ({
  open: false,
  onClose: () => set({ open: false }),
  onOpen: () => set({ open: true }),
  setOpen: nextState => set({ open: nextState }),
}))
