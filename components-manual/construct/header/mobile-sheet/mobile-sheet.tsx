import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components-manual/ui/sheet-full'
import { useMobileSheetStore } from '@/store/ui/mobile-sheet-store'
import RabbitLogo from '@/components-manual/icons/rabbit-logo'
import { LocaleBoard } from '../../locale-board/locale-board'
import ThemeChange from '../../theme-change/theme-change'

export default function MobileSheet() {
  const { open, setOpen } = useMobileSheetStore()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="pt-6 px-6 pb-8">
        <div className="absolute left-0 top-6 px-6 w-full">
          <div>
            <RabbitLogo className="stroke-vector" />
          </div>
          <div className="text-center">Mobile menu</div>
        </div>

        <div className='bg-red-normal/5 h-full'></div>

        <div className='absolute bottom-8 left-0 px-6 w-full flex justify-between'>
          <LocaleBoard />
          <ThemeChange />
        </div>
      </SheetContent>
    </Sheet>
  )
}
