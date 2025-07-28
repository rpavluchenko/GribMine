'use client'

import Image from 'next/image'

import { unbounded } from '@/app/fonts'
import useSvg from '@/hooks/useSvg'

export default function UsersAdminPage() {
  const svgPath = useSvg()
  return (
    <div className="mx-auto flex max-w-[40rem] flex-col items-center gap-5">
      <div className="relative flex items-center justify-center">
        <Image
          alt="coming-soon"
          height={128}
          src={`${svgPath}coming-soon.svg`}
          width={128}
        />
        <div className="absolute size-25 rounded-full bg-emerald-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-3xl font-semibold dark:text-neutral-100`}
      >
        Список пользователей
      </h1>
      <div className="flex items-center gap-3">
        <p
          className={`${unbounded.className} text-center text-xl font-semibold sm:text-lg md:text-xl dark:text-neutral-300`}
        >
          Страница в разработке
        </p>
      </div>
    </div>
  )
}
