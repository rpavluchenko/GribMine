'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimate } from 'motion/react'

import { unbounded } from '@/app/fonts'

const titles = ['Приватный', 'Ванильный', 'Комфортный']

export default function SwitchingTitle() {
  const titleIndex = useRef<number>(0)
  const [currentTitle, setCurrentTitle] = useState<string>(
    titles[titleIndex.current]
  )
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const interval = setInterval(async () => {
      titleIndex.current = (titleIndex.current + 1) % titles.length
      await animate(scope.current, { opacity: 0 }, { duration: 0.5 })
      setCurrentTitle(titles[titleIndex.current])
      await animate(scope.current, { opacity: 1 }, { duration: 0.5 })
    }, 3000)

    return () => clearInterval(interval)
  }, [animate, scope])

  return (
    <h1
      className={`${unbounded.className} text-4xl font-semibold text-emerald-500/90 sm:text-5xl xl:text-6xl dark:text-emerald-200`}
    >
      GribMine <span ref={scope}>{currentTitle}</span>
      <span> сервер Minecraft</span>
    </h1>
  )
}
