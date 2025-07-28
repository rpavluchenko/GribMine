'use client'

import { useAnimate } from 'motion/react'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

import type { LinkTab } from '@/constants/tabs.constants'

interface Props {
  tabs: LinkTab[]
}

export default function LinkTabs({ tabs }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [hoveredTab, setHoveredTab] = useState<number | undefined>(undefined)
  const [isReady, setIsReady] = useState(false)

  const [scope, animate] = useAnimate<HTMLDivElement>()

  function handleSelect(index: number) {
    setSelectedTab(index)
    router.push(tabs[index].href ?? '/dashboard')
  }

  // prefetch all routes
  useEffect(() => {
    for (const tab of tabs) router.prefetch(tab.href)
  }, [tabs, router])

  // select start tab based on current pathname
  useEffect(() => {
    setSelectedTab(tabs.findIndex((tab) => tab.href === pathname) || 0)
  }, [pathname, tabs])

  useEffect(() => {
    const checkIconsLoaded = () => {
      const allIconsLoaded = tabs.every((tab, index) => {
        const button = scope.current?.children.item(index)
        return button?.querySelector('svg')
      })

      if (allIconsLoaded) setIsReady(true)
      else setTimeout(checkIconsLoaded, 50)
    }

    checkIconsLoaded()
  }, [tabs, scope])

  useEffect(() => {
    if (!isReady) return

    const elem = scope.current?.children.item(hoveredTab ?? selectedTab)
    if (!(elem instanceof HTMLElement)) return

    const { left, width } = elem.getBoundingClientRect()
    const parentLeft = scope.current?.getBoundingClientRect().left || 0

    animate(
      'span.indicator',
      { left: left - parentLeft, width },
      { ease: 'easeInOut', duration: 0.2 }
    )
  }, [selectedTab, hoveredTab, scope, animate, isReady])

  return (
    <div
      className="relative flex h-14 items-center gap-4 overflow-x-auto font-semibold"
      ref={scope}
    >
      {tabs.map((tab, index) => (
        <button
          className={`relative flex cursor-pointer items-center justify-center gap-3 rounded-full px-5 py-2 font-semibold text-nowrap duration-500 ease-in-out active:scale-[96%] active:opacity-95 ${
            selectedTab === index
              ? 'text-emerald-700 hover:bg-emerald-500/40 dark:text-emerald-500 hover:dark:bg-emerald-700/40'
              : 'hover:bg-neutral-200 dark:hover:bg-neutral-800/40'
          }`}
          key={index}
          onClick={() => handleSelect(index)}
          onMouseEnter={() => setHoveredTab(index)}
          onMouseLeave={() => setHoveredTab(undefined)}
        >
          <Icon className="text-lg" icon={tab.icon} />
          <span>{tab.title}</span>
        </button>
      ))}
      {isReady && (
        <span
          className={`indicator absolute bottom-0 h-0.5 rounded-full shadow-md transition-colors duration-300 ease-in-out ${
            hoveredTab !== undefined && hoveredTab !== selectedTab
              ? 'bg-black dark:bg-white'
              : 'bg-emerald-700 dark:bg-emerald-500'
          }`}
        />
      )}
    </div>
  )
}
