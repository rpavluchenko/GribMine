import { Icon } from '@iconify/react'

import { unbounded } from '@/app/fonts'
import BlockGlow from '@/components/ui/block/BlockGlow'
import { features } from '@/constants/features.constants'
import { cn } from '@/utils/cn'

export default function FeaturesPage() {
  return (
    <section className="grid gap-8 py-5" id="features">
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-100`}
      >
        Фишки сервера
      </h1>
      <p className="mx-auto max-w-5xl text-center text-xl font-medium md:text-2xl dark:text-neutral-200/90">
        Мы тщательно подбираем плагины и датапаки. Стараемся делать сервер лучше
        для нашего комьюнити.
      </p>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <BlockGlow
            className={cn(
              'group relative flex flex-col items-center gap-4 transition duration-400 hover:-translate-y-1',
              index % 2 === 0 && 'bg-transparent',
              index % 2 !== 0 &&
                'bg-[radial-gradient(105.50%_145.10%_at_41%_40%,#10b9812b_0%,#34d39900_65%)]'
            )}
            key={index}
          >
            {feature.inDev && (
              <div className="pointer-events-none absolute top-2 left-2 rounded bg-yellow-300 px-2 py-0.5 shadow dark:bg-yellow-500">
                <p className="text-[12px] font-bold text-black">В разработке</p>
              </div>
            )}

            <div className="flex flex-col items-center gap-2">
              <div className="rounded-xl border-2 border-emerald-400 bg-neutral-100/70 p-3 shadow-lg shadow-emerald-500/20 transition-all duration-400 group-hover:shadow-emerald-500/40 dark:bg-neutral-700">
                <Icon
                  className="text-3xl text-emerald-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                  icon={feature.icon}
                />
              </div>
              <h2
                className={`${unbounded.className} text-center text-lg font-bold text-neutral-900 dark:text-neutral-100`}
              >
                {feature.title}
              </h2>
              <p className="text-md text-center font-semibold text-neutral-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </div>
          </BlockGlow>
        ))}
      </div>
    </section>
  )
}
