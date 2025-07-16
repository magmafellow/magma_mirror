'use client'

import IconInfo from '@/components-manual/icons/general/icon-info'
import IconSnowV1 from '@/components-manual/icons/misc/icon-snow-v1'
import IconArrowLeft from '@/components-manual/icons/nav/icon-arrow-left'
import IconArrowRight from '@/components-manual/icons/nav/icon-arrow-right'
import { Button } from '@/components-manual/ui/button'
import Heading from '@/components-manual/ui/heading'
import React, { useId, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useInfoProjectStore } from '@/store/ui/info-project-dialog-store'
import Link from 'next/link'

type ProjectCardButton = {
  label: string
  cb: () => void
}

export type TProjectCard = {
  name: string
  description: string
}

type CardState = 'default' | 'carousel' | 'info'

type Props = {
  project: TProjectCard
}

export default function ProjectCard({ project }: Props) {
  const { onOpen, setData } = useInfoProjectStore()
  const id = useId()

  const [cardState, setCardState] = useState<CardState>('default')

  const slides = [
    {
      url: '/assets/images/projects/travel-agency/desktop_promote.jpg',
    },
    {
      url: '/assets/images/projects/travel-agency/desktop_exclusive-deals.jpg',
    },
    {
      url: '/assets/images/projects/travel-agency/desktop_subscribe.jpg',
    },
  ]

  const onSnowClickHandler = () => {
    if (cardState === 'carousel') {
      setCardState('default')
    } else if (cardState === 'default') {
      setCardState('carousel')
    }
  }

  const onInfoClickHandler = () => {
    onOpen()
    setData(project)
  }

  return (
    <div className="project-card relative overflow-hidden min-h-[287px] rounded-2xl bg-surface py-4 px-6">
      <div className="project-card__face h-full flex flex-col gap-4">
        <div className="project-card__top_bar flex items-center justify-between">
          <Heading seo order="h3">
            {project.name}
          </Heading>
          <div className="flex items-center gap-4">
            <button
              className="p-1 curs-hover relative z-20"
              onClick={onSnowClickHandler}
            >
              <IconSnowV1
                className={`${
                  cardState === 'carousel'
                    ? 'fill-vector'
                    : ''
                } relative duration-150 size-7 fill-headline`}
              />
            </button>
            <button className="p-1 curs-hover" onClick={onInfoClickHandler}>
              <IconInfo className="size-7 fill-headline" />
            </button>
          </div>
        </div>
        <div className="project-card__description flex-grow">
          <p className="">{project.description}</p>
        </div>
        <div className="project-card__actions flex gap-4">
          <Button asChild className="w-full">
            <Link href="#">
              More
            </Link>
          </Button>
          {/* <Button className="w-full">Enable Strength</Button> */}
        </div>
      </div>

      {cardState === 'carousel' && (
        <div className={`project-card__carousel absolute inset-0 bg-[#000]/50`}>
          <div className="project-card__swiper-outer absolute bottom-[28px] w-full h-[197px] px-8">
            <Swiper
              className="h-full w-full"
              slidesPerView={2}
              spaceBetween={16}
              modules={[Navigation]}
              navigation={{
                prevEl: `.project-card__prev_${id}`,
                nextEl: `.project-card__next_${id}`,
              }}
            >
              {slides.map(el => (
                <SwiperSlide
                  key={el.url}
                  className="rounded-sm overflow-hidden"
                >
                  <img
                    className="object-center object-cover h-full w-full"
                    src={el.url}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <Button
              className={`absolute project-card__prev_${id} top-1/2 z-10 left-4 -translate-y-1/2`}
            >
              <IconArrowLeft className="size-5 fill-[#fff]" />
            </Button>
            <Button
              className={`absolute project-card__next_${id} top-1/2 z-10 right-4 -translate-y-1/2`}
            >
              <IconArrowRight className="size-5 fill-[#fff]" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
