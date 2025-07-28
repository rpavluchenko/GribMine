'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { unbounded } from '@/app/fonts'
import useSvg from '@/hooks/useSvg'

const discordLink = 'https://discord.gg/dm6CXJRMX7'

export default function DiscordPage() {
  const svgPath = useSvg()
  const [timer, setTimer] = useState(3)
  const [isMounted, setIsMounted] = useState(true)
  const router = useRouter()

  useEffect(() => {
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    const countdown = setInterval(() => {
      if (!isMounted) {
        clearInterval(countdown)
        return
      }
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown)
          if (isMounted) {
            router.push(discordLink)
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [isMounted, router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <div className="relative flex items-center justify-center">
        <Image
          alt="discord"
          height={128}
          src={`${svgPath}discord.svg`}
          width={128}
        />
        <div className="absolute size-25 rounded-full bg-cyan-200/45 blur-[50px]" />
      </div>
      <h1
        className={`${unbounded.className} text-center text-3xl font-semibold md:text-3xl dark:text-neutral-100`}
      >
        Переадресация на discord.gg
      </h1>
      <div className="flex items-center justify-center gap-3">
        <Icon
          className="md:text-md text-xl dark:text-neutral-300"
          icon="lucide:clock"
        />
        <p
          className={`${unbounded.className} md:text-md text-xl font-semibold dark:text-neutral-300`}
        >
          Через {timer} {timer === 1 ? 'секунду' : 'секунд'}
        </p>
      </div>
    </div>
  )
}
