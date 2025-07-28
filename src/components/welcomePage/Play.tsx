'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'

import { unbounded } from '@/app/fonts'
import useAccessPrice from '@/hooks/bills/useAccessPrice'

export default function PlayPage() {
  const { accessPrices } = useAccessPrice()

  return (
    <section
      className="flex flex-col gap-5 text-center dark:text-neutral-100"
      id="play"
    >
      <h1
        className={`${unbounded.className} text-4xl font-semibold md:text-6xl`}
      >
        {accessPrices.forever ? (
          <>
            Всего {accessPrices.forever.final} ₽{' '}
            {accessPrices.forever.discount > 0
              ? `(Скидка: ${accessPrices.forever.discount}%)`
              : null}
          </>
        ) : (
          <span className="animate-pulse text-neutral-400">Загрузка...</span>
        )}
      </h1>

      <p className="mx-auto max-w-2xl text-lg font-medium text-pretty sm:text-xl md:text-2xl">
        Присоединяйтесь к захватывающим ивентам и дружелюбному комьюнити. Мы уже
        ждем вас!
      </p>
      <Link
        className="mx-auto flex max-w-max items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-white transition-all duration-500 ease-in-out hover:bg-emerald-600 active:scale-95"
        href="/dashboard"
      >
        <Icon className="text-2xl" icon="lucide:shopping-basket" />
        <p className="font-semibold">Приобрести доступ</p>
      </Link>
    </section>
  )
}
