'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

import { unbounded } from '@/app/fonts'
import BlockLinkL from '@/components/ui/block/BlockLink'
import useSvg from '@/hooks/useSvg'

export default function DelAccount() {
  const svgPath = useSvg()
  return (
    <div className="mx-auto flex max-w-[40rem] flex-col items-center gap-5">
      <div className="relative flex items-center justify-center">
        <Image
          alt="Only discord"
          height={128}
          src={`${svgPath}discord.svg`}
          width={128}
        />
        <div className="absolute size-25 rounded-full bg-emerald-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-3xl font-semibold dark:text-neutral-100`}
      >
        Удаление аккаунта
      </h1>
      <div className="flex items-center gap-3">
        <p
          className={`${unbounded.className} text-center text-xl font-semibold sm:text-lg md:text-xl dark:text-neutral-300`}
        >
          Удаление аккаунта пока что только через Discord, но в будущем будет
          прямо на сайте!
        </p>
      </div>
      <BlockLinkL className="flex items-center gap-3 px-6 py-2" href="/discord">
        <Icon className="text-xl" icon="lucide:move-right" />
        <p className={`text-lg font-semibold dark:text-neutral-300`}>
          Подать заявку
        </p>
      </BlockLinkL>
    </div>
  )
}
