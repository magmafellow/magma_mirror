'use client'

import React, { useId } from 'react'
import Heading from '@/components-manual/ui/heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Button } from '@/components-manual/ui/button'
import IconArrowLeft from '@/components-manual/icons/nav/icon-arrow-left'
import IconArrowRight from '@/components-manual/icons/nav/icon-arrow-right'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'
import { Progress } from '@/components-manual/ui/progress'
import Chip from '@/components-manual/ui/chip'
import Link from 'next/link'

export default function Index() {
  const uiID = useId()

  return (
    <>
      <Heading seo={true} order="h1" className="mb-10">
        Travel Agency
      </Heading>
      <ProjectPhotosCarouselBlock className="mb-10" />
      <ProjectDescriptionBlock className="mb-10" />
      <KeyFeaturesAndTechnicalBreakdownBlock className="mb-10" />
      <TechnologiesBlock className="mb-10" />
      <VisitBlock className="mb-10" />
    </>
  )
}

type BlockProps = {
  className?: string
}

function ProjectPhotosCarouselBlock({ className }: BlockProps) {
  return (
    <div className={cn(`relative px-8 pb-8`, className)}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl: '.autonomy-project__prev',
          nextEl: '.autonomy-project__next',
        }}
        pagination={{
          el: '.autonomy-project__swiper-pagination',
          bulletClass: 'swiper-bullet-general curs-hover',
          bulletActiveClass: 'swiper-bulletActive-general',
          clickable: true,
        }}
        spaceBetween={32}
        className=""
      >
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img
            src="/assets/images/projects/travel-agency/desktop_promote.jpg"
            alt="travel-agency exclusive-deals"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img
            src="/assets/images/projects/travel-agency/desktop_exclusive-deals.jpg"
            alt="travel-agency exclusive-deals"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img
            src="/assets/images/projects/travel-agency/desktop_subscribe.jpg"
            alt="travel-agency exclusive-deals"
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-navigation_container">
        <Button
          className={`absolute autonomy-project__prev top-[calc(50%-4*8px)] z-10 left-0 -translate-y-1/2`}
        >
          <IconArrowLeft className="size-5 fill-[#fff]" />
        </Button>
        <Button
          className={`absolute autonomy-project__next top-[calc(50%-4*8px)] z-10 right-0 -translate-y-1/2`}
        >
          <IconArrowRight className="size-5 fill-[#fff]" />
        </Button>
      </div>
      <div
        className={`autonomy-project__swiper-pagination flex gap-3 justify-center items-center absolute w-full h-auto !bottom-4 !translate-y-1/2`}
      ></div>
    </div>
  )
}

function ProjectDescriptionBlock({ className }: BlockProps) {
  return (
    <div className={cn(className)}>
      <Heading order="h2">Project Description</Heading>
      <div className="max-w-[740px]">
        <p className="mb-6">
          Telegram is a cloud-based messaging application that was launched in
          2013 by Pavel Durov, the founder of VKontakte. Known for its speed,
          privacy, and cross-platform support, Telegram allows users to send
          text messages, voice and video messages, multimedia files, and
          documents. Unlike many other messaging apps, Telegram offers unlimited
          cloud storage, which means users can access their chats and media from
          multiple devices seamlessly without relying on local backups.
        </p>
        <p>
          One of Telegram’s defining features is its support for large group
          chats and broadcast channels. Groups can include up to 200,000
          members, making it suitable for communities, businesses, and fan
          groups. Channels allow one-way communication from admins to followers,
          which is ideal for news, announcements, and content sharing with
          unlimited audiences.
        </p>
      </div>
    </div>
  )
}

function KeyFeaturesAndTechnicalBreakdownBlock({ className }: BlockProps) {
  return (
    <div
      className={cn('flex flex-col gap-10 ilg:flex-row ilg:gap-4', className)}
    >
      <div className="ilg:w-1/2">
        <Heading order="h3" className="mb-4">
          Key features
        </Heading>
        <ul className="general-ul">
          <li className="general-li">
            Single page application (SPA) with smooth navigation
          </li>
          <li className="general-li">
            Responsive design compatible with all screen sizes
          </li>
          <li className="general-li">
            Email integration using Resend Library in contact form
          </li>
          <li className="general-li">
            Dynamic project display using GitHub REST API
          </li>
          <li className="general-li">
            Animated transitions for enhanced user experience
          </li>
        </ul>
      </div>
      <div className="max-w-[480px] ilg:w-1/2">
        <Heading order="h3" className="mb-4">
          Technical Breakdown
        </Heading>
        <div className="flex flex-col gap-3">
          <div className="progress_group flex flex-col">
            <div className="flex justify-between items-end">
              <div className="typo-caption-md text-subHeadline pb-0.5">
                Front-end
              </div>
              <div className="typo-body-xxs">25%</div>
            </div>
            <Progress value={25} />
          </div>

          <div className="progress_group flex flex-col">
            <div className="flex justify-between items-end">
              <div className="typo-caption-md text-subHeadline pb-0.5">
                Back-end
              </div>
              <div className="typo-body-xxs">65%</div>
            </div>
            <Progress value={65} />
          </div>

          <div className="progress_group flex flex-col">
            <div className="flex justify-between items-end">
              <div className="typo-caption-md text-subHeadline pb-0.5">
                DevOps
              </div>
              <div className="typo-body-xxs">10%</div>
            </div>
            <Progress value={10} />
          </div>
        </div>
      </div>
    </div>
  )
}

function TechnologiesBlock({ className }: BlockProps) {
  return (
    <div className={cn(className)}>
      <Heading order="h2">Technologies</Heading>
      <div className="flex flex-wrap gap-4">
        <Chip text="Next.js" />
        <Chip text="Typescript" />
        <Chip text="Shadcn" />
        <Chip text="Gulp" />
        <Chip text="DrizzleORM" />
      </div>
    </div>
  )
}

function VisitBlock({ className }: BlockProps) {
  return (
    <div className={cn(className)}>
      <Heading order="h2" className=''>Visit the site</Heading>
      <Button asChild className="w-full max-w-[320px]">
        <Link href="https://yandex.ru">Go to website</Link>
      </Button>
    </div>
  )
}
