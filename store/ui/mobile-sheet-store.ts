import { create } from 'zustand'

type MobileSheetStore = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  setOpen: (nextState: boolean) => void
}

export const useMobileSheetStore = create<MobileSheetStore>()((set, get) => ({
  open: false,
  onClose: () => set({ open: false }),
  onOpen: () => set({ open: true }),
  setOpen: nextState => set({ open: nextState }),
}))
