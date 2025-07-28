'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'

import { montserrat, unbounded } from '@/app/fonts'
import BlockLinkL from '@/components/ui/block/BlockLink'

const links = [
  {
    title: 'Условия использования',
    href: 'https://grib.gitbook.io/grib_wiki/polzovatelskoe-soglashenie',
    iconName: 'lucide:book-open',
  },
  {
    title: 'Политика конфиденциальности',
    href: 'https://grib.gitbook.io/grib_wiki/politika/politika-konfidencialnosti',
    iconName: 'lucide:shield-check',
  },
  {
    title: 'Поддержка',
    href: '/discord',
    iconName: 'lucide:headset',
  },
]

function Footer() {
  return (
    <footer className="outline-2 outline-neutral-300/40 dark:outline-neutral-700/40">
      <div
        className={`${montserrat.className} mx-auto flex max-w-[85rem] flex-col gap-3 px-6 py-5 text-[17px] font-semibold`}
      >
        <Link
          className="w-fit duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
          href="/"
        >
          <h1
            className={`${unbounded.className} text-2xl font-semibold dark:text-neutral-100`}
          >
            GribMine
          </h1>
        </Link>
        <p className="dark:text-neutral-200/80">
          Copyright © GribMine, oarer & kryptonfox 2025. Все права защищены.
          Скачивание, копирование и редактирование запрещено!
        </p>
        <p className="dark:text-neutral-200/80">
          <span>Сайт сделан </span>
          <Link
            className="underline-sky-400 text-cyan-600 underline decoration-sky-400 underline-offset-2 opacity-100 duration-300 hover:text-sky-600"
            href="https://oarer.space"
            target="_blank"
          >
            @oarer
          </Link>
          <span> и </span>
          <Link
            className="underline-sky-400 text-cyan-600 underline decoration-sky-400 underline-offset-2 opacity-100 duration-300 hover:text-sky-600"
            href="https://kryptonfox.ru/"
            target="_blank"
          >
            @kryptonfox
          </Link>
          {' <3'}
        </p>
        <p className="dark:text-neutral-200/80">
          Not an official Minecraft service. Not approved by or associated with
          Mojang or MICR
        </p>
        <div className="hidden flex-wrap gap-4 md:flex">
          {links.map((link) => (
            <BlockLinkL
              className={`flex items-center gap-4 px-4 py-2 hover:scale-98`}
              href={link.href}
              key={link.iconName}
            >
              <Icon className="text-2xl" icon={link.iconName} />
              <span className="font-semibold">{link.title}</span>
            </BlockLinkL>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:hidden">
          {links.map((link) => (
            <BlockLinkL
              className={`flex w-full items-center gap-4 px-4 py-2 hover:scale-98`}
              href={link.href}
              key={link.iconName}
            >
              <Icon className="text-2xl" icon={link.iconName} />
              <span className="font-semibold">{link.title}</span>
            </BlockLinkL>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default function FooterLayout() {
  const pathname = usePathname()

  return (
    pathname !== '/discord' &&
    pathname !== '/auth/register' &&
    pathname !== '/auth/login' && <Footer />
  )
}
