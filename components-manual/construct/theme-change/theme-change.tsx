import IconMoon from '@/components-manual/icons/misc/icon-moon'
import IconSun from '@/components-manual/icons/misc/icon-sun'
import React from 'react'

export default function ThemeChange() {
  return (
    <div className="inline-flex border border-neutral-extraBold rounded-full gap-2 py-1 px-1.5">
      <button className="size-6 duration-150 hover:bg-neutral-black rounded-full flex justify-center items-center">
        <IconSun className='stroke-neutral-light size-4' />
      </button>
      <button className="size-6 duration-150 hover:bg-neutral-black rounded-full flex justify-center items-center">
        <IconMoon className='fill-neutral-light size-4' />
      </button>
    </div>
  )
}
