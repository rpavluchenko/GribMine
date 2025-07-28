import type { ReactNode } from 'react'

import AdminWelcomeTitle from '@/components/admin/layout/section/WelcomeTitle'
import LinkTabs from '@/components/dashboard/layout/LinkTabs'
import DashboardAvatar from '@/components/dashboard/layout/sections/Avatar'
import { adminLayoutTabs } from '@/constants/tabs.constants'
import DashboardEffect from '@/shared/transitionEffects/DashboardEffect'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return (
    <main className="mx-auto min-h-screen max-w-[90rem] pt-28 pb-0 text-neutral-800 lg:pb-12 xl:pt-36 dark:text-neutral-200/90">
      <div className="grid grid-cols-1 gap-16 px-12 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 lg:col-span-2 xl:col-span-3">
          <div className="flex items-center justify-between gap-4 lg:justify-start lg:gap-10">
            <DashboardAvatar />
            <AdminWelcomeTitle />
          </div>
          <p className="mt-6 mb-8 max-w-4xl text-lg font-semibold text-balance">
            Добро пожаловать в админ панель! Сейчас{' '}
            <span className="dark:text-neutral-200">
              {hours}:{formattedMinutes}
            </span>
          </p>
          <LinkTabs tabs={adminLayoutTabs} />
          <DashboardEffect>{children}</DashboardEffect>
        </div>
      </div>
    </main>
  )
}
