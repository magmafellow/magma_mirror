import { TProjectCard } from '@/components-manual/element/project-card/project-card'
import { create } from 'zustand'


type TInfoProjectStore = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  setOpen: (nextState: boolean) => void
  data: TProjectCard | null
  setData: (nextData: TProjectCard) => void
}

export const useInfoProjectStore = create<TInfoProjectStore>()((set, get) => ({
  open: false,
  onClose: () => set({ open: false }),
  onOpen: () => set({ open: true }),
  setOpen: nextState => set({ open: nextState }),
  data: null,
  setData: nextData => set({ data: nextData }),
}))
