'use client'

import { Icon } from '@iconify/react'

import { unbounded } from '@/app/fonts'
import Block from '@/components/ui/block/Block'
import { useMeQuery } from '@/queries/Me'

export default function DashboardReferralPage() {
  const { data } = useMeQuery()
  return (
    <Block className="flex flex-col justify-between gap-4 p-6 font-semibold xl:p-8 dark:text-neutral-200">
      <div className="grid items-center justify-start gap-4 md:grid-cols-2">
        <div className="flex items-center gap-4">
          <Block className="hidden p-3 lg:flex">
            <Icon
              className="text-semibold text-[22px]"
              icon="lucide:user-plus"
            />
          </Block>
          <h1
            className={`${unbounded.className} text-xl text-black lg:flex dark:text-white`}
          >
            Реферальная система
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Block className="hidden p-3 lg:flex">
            <Icon className="text-semibold text-[22px]" icon="lucide:info" />
          </Block>
          <p className="text-lg font-bold text-black md:text-xl lg:flex dark:text-white">
            Делитесь своим промокодом и получайте процент с пополнения
          </p>
        </div>
      </div>

      <div className="grid items-center gap-4 md:grid-cols-2">
        <div className="grid items-center">
          <ul className="grid list-inside list-disc gap-2">
            <li>0-5 рефералов — 20% от суммы пополнения</li>
            <li>5-10 рефералов — 30% от суммы пополнения</li>
            <li>10-25 рефералов — 35% от суммы пополнения</li>
            <li>25 и более — 40% от суммы пополнения</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Icon className="text-xl" icon="lucide:users" />
            <p className="text-base">
              Использований промокода —{' '}
              <span className="font-bold">{data?.referral?.usage}</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Icon className="text-xl" icon="lucide:percent" />
            <p className="text-base">
              Процент, получаемый с рефералов —{' '}
              <span className="font-bold">
                {data?.referral?.referral_percent}%
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Icon className="text-xl" icon="lucide:credit-card" />
            <p className="text-base">
              Заработано с рефералов —{' '}
              <span className="font-bold">{data?.referral?.balance} ₽</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Icon className="text-xl" icon="lucide:ticket-percent" />
            <p className="text-base">
              Ваш промокод:{' '}
              <span className="font-bold">{data?.referral?.referral_code}</span>
            </p>
          </div>
        </div>
      </div>
    </Block>
  )
}
