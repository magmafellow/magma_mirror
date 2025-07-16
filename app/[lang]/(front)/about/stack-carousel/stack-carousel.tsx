'use client'

import styles from './stack-carousel.module.scss'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import TechCard from '@/components-manual/element/tech-card/tech-card'
import IconNodejs from '@/components-manual/icons/stack/icon-nodejs'
import IconTypeScript from '@/components-manual/icons/stack/icon-typescript'
import IconReact from '@/components-manual/icons/stack/icon-react'
import IconJavaScript from '@/components-manual/icons/stack/icon-javascript'
import { Button } from '@/components-manual/ui/button'
import IconLeft from '@/components-manual/icons/nav/icon-left'
import IconRight from '@/components-manual/icons/nav/icon-right'
import { Navigation } from 'swiper/modules'
import IconPostgresql from '@/components-manual/icons/stack/icon-postgresql'
import IconTailwind from '@/components-manual/icons/stack/icon-tailwind'
import IconDrizzle from '@/components-manual/icons/stack/icon-drizzle'

export default function StackCarousel() {
  const stack = [
    {
      name: 'Node.js',
      libraryURL: 'https://nodejs.org/en',
      description:
        'Node.js is a runtime that lets you run JavaScript on the server side, outside the browser. It uses Chrome’s V8 engine for fast execution and handles I/O with a non-blocking, event-driven model. This makes it great for scalable apps like web servers and APIs. Node.js also includes npm, a huge library ecosystem for developers.',
      icon: <IconNodejs className="fill-vector" />,
    },
    {
      name: 'React',
      libraryURL: 'https://react.dev/',
      description:
        "React is a powerful JavaScript library for building fast, interactive user interfaces. Created by Facebook, it lets developers design reusable components that update seamlessly as data changes. With its virtual DOM, React ensures smooth performance and efficient rendering. It's the go-to choice for modern web apps, from simple pages to complex, dynamic platforms.",
      icon: <IconReact className="fill-vector" />,
    },
    {
      name: 'TypeScript',
      libraryURL: 'https://www.typescriptlang.org/',
      description:
        "TypeScript is a superset of JavaScript developed by Microsoft that adds static typing to the language. It helps catch errors early during development and makes code easier to understand and maintain. TypeScript compiles to plain JavaScript, so it works anywhere JavaScript runs. It's widely used in large-scale applications for its improved tooling, safety, and developer experience.",
      icon: <IconTypeScript className="stroke-vector" />,
    },
    {
      name: 'JavaScript',
      libraryURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      description:
        'JavaScript is a versatile, high-level programming language primarily used for creating interactive web pages. It runs in the browser and allows developers to build dynamic content, handle events, and communicate with servers. JavaScript is an essential part of web development, working alongside HTML and CSS.',
      icon: <IconJavaScript className="fill-vector" />,
    },
    {
      name: 'PostgreSQL',
      libraryURL: 'https://www.postgresql.org/',
      description:
        "PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its reliability, flexibility, and standards compliance. It supports advanced features like ACID transactions, complex queries, JSON data types, and full-text search. PostgreSQL is highly extensible, allowing users to define custom functions, data types, and even plugins. It's widely used in both small applications and large-scale enterprise systems for its robustness and scalability.",
      icon: <IconPostgresql className="!fill-vector" />,
    },
    {
      name: 'Tailwind',
      libraryURL: 'https://tailwindcss.com/',
      description:
        'Tailwind CSS is a utility-first CSS framework that allows developers to build custom user interfaces quickly by applying pre-defined classes directly in HTML. Instead of writing custom CSS, you use utility classes like p-4, text-center, or bg-blue-500 to style elements. This approach encourages consistency, rapid development, and easier maintenance. Tailwind is highly customizable, making it a favorite for building modern, responsive, and clean-looking web designs.',
      icon: <IconTailwind className="!fill-vector" />,
    },
    {
      name: 'Drizzle',
      libraryURL: 'https://orm.drizzle.team/',
      description:
        'Drizzle ORM is a modern, type-safe SQL ORM (Object-Relational Mapper) for JavaScript and TypeScript. It’s designed to work seamlessly with relational databases like PostgreSQL, MySQL, and SQLite, offering a fully typed experience without sacrificing performance or flexibility. Drizzle emphasizes simplicity and transparency by generating SQL under the hood, allowing developers to write schema and queries in TypeScript with full IntelliSense support. It’s ideal for projects that need strong type safety and a developer-friendly workflow without the complexity of traditional ORMs.',
      icon: <IconDrizzle className="!fill-vector" />,
    },
  ]

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        className=""
        slidesPerView={'auto'}
        navigation={{
          prevEl: '.stack-carousel_navigation_left',
          nextEl: '.stack-carousel_navigation_right',
        }}
      >
        {stack.map(tech => (
          <SwiperSlide key={tech.libraryURL} className={`${styles.swiper_slide}`}>
            <TechCard
              libraryURL={tech.libraryURL}
              description={tech.description}
              name={tech.name}
            >
              {/* <IconNodejs className="fill-vector" /> */}
              {tech.icon}
            </TechCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="stack-carousel_navigation">
        <Button className="stack-carousel_navigation_left absolute -left-0 z-10 top-1/2 -translate-y-1/2">
          <IconLeft className="fill-[#fff] size-5" />
        </Button>
        <Button className="stack-carousel_navigation_right absolute -right-0 z-10 top-1/2 -translate-y-1/2">
          <IconRight className="fill-[#fff] size-5" />
        </Button>
      </div>
    </>
  )
}
