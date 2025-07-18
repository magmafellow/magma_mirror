import styles from './projects.module.scss'
import BaseLayout from '@/components-manual/construct/base-layout/base-layout'
import ResponsiveContainer from '@/components-manual/ui/responsive-container'
import React from 'react'
import { Locales, getDictionary } from '../dictionaries'
import Heading from '@/components-manual/ui/heading'
import ProjectCard from '@/components-manual/element/project-card/project-card'
import InfoProjectDialog from '@/components-manual/construct/dialogs/info-project-dialog/info-project-dialog'
import LocaleBoardV2 from '@/components-manual/construct/locale-board-v2/locale-board-v2'

type PageProps = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locales)

  return (
    <>
      <BaseLayout dictionary={dictionary}>
        <ResponsiveContainer className="main-grow px-3 mb-24">
          <Heading seo order="h1">
            Projects
          </Heading>
          <div className={`${styles.projectGrid}`}>
            {projects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="h-96"></div>
          <LocaleBoardV2 />
        </ResponsiveContainer>
      </BaseLayout>
      <div className="dialogs_container">
        <InfoProjectDialog />
      </div>
    </>
  )
}

const projects = [
  {
    name: 'Telegram',
    description:
      'Fast and secure chat-app directed on innovations and freedom. Explore a lot of features today. Group calls, video messages, time-deffered messages and much more!',
  },
  {
    name: 'Green',
    description:
      'GFast and secure chat-app directed on innovations and freedom. Explore a lot of features today. Group calls, video messages, time-deffered messages and much more!',
  },
  {
    name: 'Jevagne',
    description:
      'JFast and secure chat-app directed on innovations and freedom. Explore a lot of features today. Group calls, video messages, time-deffered messages and much more!',
  },
]
