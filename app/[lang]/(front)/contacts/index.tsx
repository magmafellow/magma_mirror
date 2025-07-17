'use client'

import React, { useState } from 'react'
import Heading from '@/components-manual/ui/heading'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import { Textarea } from '@/components-manual/ui/textarea'
import { Input } from '@/components-manual/ui/input'
import { Button } from '@/components-manual/ui/button'
import { Switch } from '@/components-manual/ui/switch'

export default function Index() {
  const [isShowInfo, setIsShowInfo] = useState(false)

  const onSwitchClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsShowInfo(!isShowInfo)
  }

  return (
    <>
      <ResponsiveContainer className="main-grow px-3 base-section-mb">
        <div className="mb-4 flex gap-16 items-center">
          <Heading seo order="h1" className="">
            Let's connect
          </Heading>

          <div className="flex items-end gap-2.5">
            <Switch checked={isShowInfo} onClick={onSwitchClickHandler} />
            <div className="typo-caption-md text-subHeadline">Show contact info</div>
          </div>
        </div>

        {isShowInfo && (
          <div className="border mb-10 rounded-2xl flex flex-col gap-4 w-max border-accent-normal py-6 px-8 bg-gradient-to-tr from-accent-solid to-accent-bold">
            <div className="flex gap-3 items-baseline text-[#fff]">
              <div className="typo-body-bold-base ">Phone:</div>
              <div>89269393457</div>
            </div>
            <div className="flex gap-3 items-baseline text-[#fff]">
              <div className="typo-body-bold-base ">Mail:</div>
              <div>magmafellow@gmail.com</div>
            </div>
            <div className="flex gap-3 items-baseline text-[#fff]">
              <div className="typo-body-bold-base ">Telegram:</div>
              <div>@polrekost</div>
            </div>
          </div>
        )}

        <p className="mb-10">Отвечу на интересующий вопрос</p>
        <div className="flex flex-col ilg:flex-row gap-10 ilg:gap-[60px] base-section-mb">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-6 grow">
              <div className="">
                <div className="typo-caption-md text-headline mb-1.5">
                  Email/Telegram
                </div>
                <Input />
              </div>
              <div>
                <div className="typo-caption-md text-headline mb-1.5">
                  Theme/Topic
                </div>
                <Input />
              </div>
            </div>
            <Button className="hidden ilg:inline-flex">Send letter</Button>
          </div>

          <div className='grow'>
            <div className="relative pb-5 mb-10 ilg:mb-0 max-w-[550px]">
              <Textarea className="w-full min-h-[287px]" />
              <div className='absolute typo-body-xs left-1/2 -translate-x-1/2'>YOUR MESSAGE</div>
              <div className='absolute typo-body-xs right-0 bottom-1.5'>99/500</div>
            </div>
            <Button className="max-w-[320px] flex mx-auto w-full ilg:hidden">Send letter</Button>
          </div>
        </div>
        <div></div>
      </ResponsiveContainer>
    </>
  )
}
