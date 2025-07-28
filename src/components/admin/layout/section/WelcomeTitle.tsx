'use client'

import { unbounded } from '@/app/fonts'
import { useMeQuery } from '@/queries/Me'

export default function AdminWelcomeTitle() {
  const { data } = useMeQuery()

  return (
    <h1
      className={`${unbounded.className} text-2xl font-semibold text-neutral-800 lg:text-3xl dark:text-neutral-100`}
    >{`Добро пожаловать${data?.login ? `, ${data?.login}` : ''}!`}</h1>
  )
}
