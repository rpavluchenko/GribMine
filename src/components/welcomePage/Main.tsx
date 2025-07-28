import { Icon } from '@iconify/react'
import Link from 'next/link'

import { unbounded } from '@/app/fonts'
import BlockGlow from '@/components/ui/block/BlockGlow'
import SwitchingTitle from './components/SwitchingTitle'

const features = [
  { icon: 'lucide:terminal', title: 'Свой лаунчер', inDev: true },
  { icon: 'lucide:cpu', title: 'Стабильный ТПС' },
  { icon: 'lucide:server', title: 'Доступность 24/7' },
]

export default function MainPage() {
  return (
    <section
      className="mx-auto flex flex-col items-center justify-center p-16 px-8 xl:px-0 xl:pt-[170px]"
      id="welcome"
    >
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="relative flex flex-col items-center gap-4 text-center xl:items-start xl:text-left">
          <div className="absolute top-[-12px] left-[100px] hidden xl:block">
            <div className="-z-10 size-50 rounded-full bg-emerald-300/40 blur-[40px] lg:bg-emerald-400/40 lg:blur-[100px] dark:bg-emerald-400/30 lg:dark:bg-emerald-300/70" />
          </div>
          <SwitchingTitle />
          <p className="text-lg font-semibold lg:text-2xl dark:text-neutral-300">
            Мы создали проект, где игроки полностью контролируют игровой процесс
            без вмешательства администрации. У нас есть уникальные механики,
            кастомные системы и стабильный сервер с высоким TPS.
          </p>
          <Link
            className="flex items-center gap-3 rounded-2xl bg-emerald-600 px-4 py-2 text-lg font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-800"
            href="/#play"
          >
            <Icon
              className="text-xl text-white dark:text-neutral-200"
              icon="lucide:play"
            />
            <p className="font-semibold text-white dark:text-neutral-200">
              Присоединиться
            </p>
          </Link>
        </div>

        <div className="hidden flex-col items-center gap-8 sm:flex">
          {features.map(({ icon, title, inDev }) => (
            <BlockGlow
              className="group relative flex w-100 items-center justify-center gap-4"
              key={title}
            >
              {inDev && (
                <div className="pointer-events-none absolute top-2 left-2 rounded bg-yellow-300 px-2 py-0.5 shadow dark:bg-yellow-500">
                  <p className="text-[12px] font-bold text-black">
                    В разработке
                  </p>
                </div>
              )}
              <Icon
                className="text-3xl text-neutral-600 transition-transform duration-300 ease-in-out group-hover:-rotate-12 group-hover:text-emerald-300 dark:text-neutral-300"
                icon={icon}
              />

              <h1
                className={`${unbounded.className} text-2xl text-neutral-600 transition-colors duration-300 group-hover:text-emerald-300 dark:text-neutral-300`}
              >
                {title}
              </h1>
            </BlockGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
