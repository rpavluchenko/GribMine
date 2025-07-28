import { type ReactNode } from 'react'
import type { Metadata } from 'next'

import DashboardWelcomeTitle from '@/components/dashboard/layout/sections/WelcomeTitle'
import LinkTabs from '@/components/dashboard/layout/LinkTabs'
import DashboardAvatar from '@/components/dashboard/layout/sections/Avatar'
import { dashboardLayoutTabs } from '@/constants/tabs.constants'
import DashboardEffect from '@/shared/transitionEffects/DashboardEffect'
import BuyKofi from '@/components/dashboard/layout/sections/BuyKofi'

// import DashboardBalance from '@/components/dashboard/layout/sections/Balance'
// import DashboardInfo from '@/components/dashboard/layout/sections/Info'

export const metadata: Metadata = {
  title: 'GribMine • Личный кабинет',
  description:
    'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
  openGraph: {
    type: 'website',
    title: 'GribMine',
    description:
      'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
    url: 'https://gribmine.ru',
    siteName: 'GribMine',
  },
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-[90rem] pt-28 pb-0 text-neutral-800 lg:pb-12 xl:pt-36 dark:text-neutral-200/90">
      <div className="grid grid-cols-1 gap-12 px-12 lg:grid-cols-[70%_30%]">
        <div>
          <div className="flex items-center justify-between gap-4 lg:justify-start lg:gap-10">
            <DashboardAvatar />
            <DashboardWelcomeTitle />
          </div>
          <p className="my-8 max-w-4xl text-lg font-semibold text-balance">
            Добро пожаловать в личный кабинет! Здесь вы можете управлять своим
            профилем, а также получить доступ на сервер.
          </p>
          <LinkTabs tabs={dashboardLayoutTabs} />
          <DashboardEffect>{children}</DashboardEffect>
        </div>
        <div className="hidden flex-col justify-center pt-35 lg:flex">
          <BuyKofi />
        </div>
      </div>
    </main>
  )
}
