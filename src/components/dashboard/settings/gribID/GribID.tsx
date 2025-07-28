'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

import BlockAdaptive from '@/components/ui/block/Block'
import { minecraft, unbounded } from '@/app/fonts'
import { useMeQuery } from '@/queries/Me'
import DashboardFDate from '@/components/dashboard/layout/sections/FDate'
import useSvg from '@/hooks/useSvg'

export default function GribID() {
  const svgPath = useSvg()

  const { data } = useMeQuery()

  if (!data) {
    return (
      <BlockAdaptive className="grid gap-6 px-6 py-6">
        <div className="grid animate-pulse items-center gap-6 lg:flex">
          <div className="h-[52px] w-[52px] rounded-2xl bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-2">
            <div className="h-4 w-24 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
        <div className="flex animate-pulse items-center gap-3">
          <div className="h-5 w-5 rounded-2xl bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
      </BlockAdaptive>
    )
  }

  return (
    <BlockAdaptive className="grid gap-6 px-6 py-6">
      <div className="grid items-center gap-6 lg:flex">
        <Image
          alt="GribMine"
          height={44}
          quality={100}
          src={`${svgPath}grib-logo.svg`}
          width={44}
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`${unbounded.className} font-medium dark:text-neutral-100`}
          >
            GribID
          </h1>
          <p
            className={`${minecraft.className} text-[14px] dark:text-neutral-300`}
          >
            {data?.login}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Icon className="text-xl" icon="lucide:clock" />
          <p className={`text-[15px] font-semibold dark:text-neutral-300`}>
            Вы были зарегистрированы{' '}
            <DashboardFDate
              createdAt={data?.updated_at || '2024-12-09T16:00:28.439Z'}
            />
          </p>
        </div>
      </div>
    </BlockAdaptive>
  )
}
