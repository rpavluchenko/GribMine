'use client'
import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import Link from 'next/link'

import useLogoutMutation from '@/hooks/auth/useLogoutMutation'
import { useMeQuery } from '@/queries/Me'
import useClickOutside from '@/hooks/useClickOutside'
import { unbounded } from '@/app/fonts'
import HeadRender from '@/shared/layout/HeadRender'

const links = [
  {
    link: '/dashboard',
    title: 'Личный кабинет',
    iconName: 'mingcute:classify-add-2-line',
  },
  {
    link: '/dashboard/settings',
    title: 'Настройки аккаунта',
    iconName: 'lucide:settings',
  },
]

export default function Me() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickOutside(menuRef, (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return
    }
    setIsMenuOpen(false)
  })

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const { mutate: logoutMutate } = useLogoutMutation()
  const { data } = useMeQuery()

  return (
    <>
      {!data ? (
        <Link
          className="flex items-center gap-2 rounded-full px-5 py-2 duration-500 hover:bg-emerald-500/20 active:opacity-70 dark:hover:bg-emerald-800/60"
          href="/auth"
        >
          <Icon
            className="text-2xl text-emerald-500 dark:text-emerald-400"
            icon="lucide:log-in"
          />
          <p className="hidden font-bold text-emerald-600 lg:flex dark:text-emerald-400">
            Авторизация
          </p>
        </Link>
      ) : (
        <>
          <button
            className="cursor-pointer"
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <HeadRender
              className="rounded-2xl border-2 border-emerald-300/50 duration-500 ease-in-out hover:scale-95 active:scale-88"
              size={52}
              skinUrl={`${process.env.NEXT_PUBLIC_API_URL}/skin/${data?.login}.png?${Date.now()}`}
            />
          </button>

          <div className="relative" ref={menuRef}>
            <div
              className={`gird absolute top-14 right-[30%] z-[2] min-w-64 origin-top-right gap-4 rounded-2xl border-2 border-neutral-800 bg-neutral-100 p-4 shadow-md transition-all duration-300 ease-in-out dark:border-neutral-500 dark:bg-neutral-950 dark:text-neutral-100 ${
                isMenuOpen
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 p-4">
                <HeadRender
                  className="border-2 border-neutral-800 dark:border-neutral-500"
                  size={52}
                  skinUrl={`${process.env.NEXT_PUBLIC_API_URL}/skin/${data?.login}.png?${Date.now()}`}
                />
                <div className="grid justify-end">
                  <p
                    className={`${unbounded.className} text-md font-semibold text-neutral-600 dark:text-neutral-200`}
                  >
                    {data?.login}
                  </p>
                </div>
              </div>
              <div className="h-0.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800/60" />
              <div className="grid gap-4 p-4">
                {links.map((link) => (
                  <Link
                    className="flex items-center gap-2 transition-all duration-500 hover:scale-101 hover:opacity-70 active:opacity-50"
                    href={link.link}
                    key={link.title}
                  >
                    <Icon className="text-2xl" icon={link.iconName} />
                    <p className="text-[15px] font-semibold text-neutral-600 dark:text-neutral-300">
                      {link.title}
                    </p>
                  </Link>
                ))}
                <button
                  className="flex cursor-pointer items-center gap-2 transition-all duration-500 hover:scale-101 hover:opacity-70 active:opacity-50"
                  onClick={() => logoutMutate()}
                >
                  <Icon
                    className="text-2xl text-neutral-600 dark:text-neutral-300"
                    icon="lucide:log-out"
                  />
                  <p className="text-[15px] font-semibold text-neutral-600 dark:text-neutral-300">
                    Выйти из аккаунта
                  </p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
