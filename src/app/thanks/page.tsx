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
          alt="Shop"
          height={128}
          src={`${svgPath}shopping-basket.svg`}
          width={128}
        />
        <div className="absolute size-25 rounded-full bg-cyan-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold dark:text-neutral-100`}
      >
        Спасибо за покупку!
      </h1>
      <p
        className={`${unbounded.className} text-center text-2xl font-semibold dark:text-neutral-100/90`}
      >
        Если товар не был выдан, <br /> то обратитесь в тех.поддержку.
      </p>
      <BlockLink
        className="flex items-center justify-center gap-3 px-4 py-2"
        href="/"
      >
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
