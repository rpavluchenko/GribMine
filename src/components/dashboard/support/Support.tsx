'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

import { unbounded } from '@/app/fonts'
import useSvg from '@/hooks/useSvg'

export default function Support() {
  const svgPath = useSvg()
  return (
    <div className="flex flex-col items-center justify-center space-y-8 pt-10">
      <div className="relative flex items-center justify-center">
        <Image
          alt="Coming soon"
          height={92}
          src={`${svgPath}coming-soon.svg`}
          width={92}
        />
        <div className="absolute size-25 rounded-full bg-cyan-200/45 blur-[50px]" />
      </div>
      <div className="flex justify-center">
        <h1
          className={`${unbounded.className} text-center text-2xl font-semibold sm:text-3xl dark:text-neutral-100`}
        >
          Тикеты в разработке!
        </h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Icon
          className="text-2xl md:text-3xl dark:text-neutral-300"
          icon="lucide:newspaper"
        />
        <p
          className={`${unbounded.className} text-xl font-semibold sm:text-lg md:text-xl dark:text-neutral-300`}
        >
          Следите за новостями!
        </p>
      </div>
    </div>
  )
}
