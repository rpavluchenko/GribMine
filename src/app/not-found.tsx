'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

import { unbounded } from '@/app/fonts'
import useSvg from '@/hooks/useSvg'
import BlockLink from '@/components/ui/block/BlockLink'

export default function NotFound() {
  const svgPath = useSvg()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        <Image
          alt="not found"
          height={128}
          src={`${svgPath}ghost.svg`}
          width={128}
        />
        <div className="absolute size-25 rounded-full bg-emerald-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold dark:text-neutral-100`}
      >
        Упсс...
      </h1>
      <p
        className={`${unbounded.className} text-center text-2xl font-semibold dark:text-neutral-100/90`}
      >
        Страница не найдена
      </p>
      <BlockLink className="flex items-center gap-3 p-2 hover:scale-102 active:scale-96">
        <Icon
          className="md:text-md text-2xl dark:text-neutral-300"
          icon="lucide:home"
        />
        <p className={`md:text-md text-xl font-semibold dark:text-neutral-300`}>
          На главную
        </p>
      </BlockLink>
    </div>
  )
}
