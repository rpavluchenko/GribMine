'use client'

import { useEffect, useState } from 'react'

import { unbounded } from '@/app/fonts'
import { useMeQuery } from '@/queries/Me'

type TimeOfDay = 'Доброе утро' | 'Добрый день' | 'Добрый вечер' | 'Доброй ночи'

export default function DashboardWelcomeTitle() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('Добрый день')
  const { data } = useMeQuery()

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 12) setTimeOfDay('Доброе утро')
    else if (hour >= 12 && hour < 18) setTimeOfDay('Добрый день')
    else if (hour >= 18 && hour < 22) setTimeOfDay('Добрый вечер')
    else setTimeOfDay('Доброй ночи')
  }, [timeOfDay])

  return (
    <h1
      className={`${unbounded.className} text-left text-2xl font-semibold text-neutral-800 lg:text-3xl dark:text-neutral-100`}
    >{`${timeOfDay}${data?.login ? `, ${data?.login}` : ''}!`}</h1>
  )
}
