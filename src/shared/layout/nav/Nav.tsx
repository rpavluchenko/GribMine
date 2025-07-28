'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'

import ThemeToggle from '@/features/theme/ChangeTheme'
import useSvg from '@/hooks/useSvg'
import Me from './components/Me'
import NavMobile from './components/NavMobile'
import { pcLinks } from '@/constants/links.constants'

export default function Nav() {
  const svgPath = useSvg()

  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(!!latest)
  })

  return (
    <>
      <motion.header
        animate={{
          paddingTop: isScrolled ? '1rem' : '2rem',
          paddingBottom: isScrolled ? '1rem' : '2rem',
        }}
        className={`fixed top-0 z-[3] w-full items-center bg-neutral-100/80 text-neutral-700 backdrop-blur-md dark:bg-neutral-950/80 dark:text-neutral-100 ${
          isScrolled
            ? 'outline-2 outline-neutral-300/40 dark:outline-neutral-700/40'
            : 'outline-none'
        }`}
        initial={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        transition={{ duration: 0.7 }}
      >
        <nav className="mx-auto xl:max-w-[90rem]">
          <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
            <div className="lg:hidden">
              <NavMobile />
            </div>
            <div className="grid grid-flow-col items-center justify-start gap-3">
              <Link
                className="transform justify-center duration-500 hover:opacity-80 active:scale-95"
                href="/"
              >
                <Image
                  alt="logo"
                  height={44}
                  src={`${svgPath}grib-logo.svg`}
                  width={44}
                />
              </Link>
            </div>
            <nav className="hidden gap-8 lg:flex">
              {pcLinks.map((linkGroup, index) => (
                <div className="flex gap-6" key={index}>
                  {linkGroup.map((link) => (
                    <Link
                      className="flex items-center gap-4 rounded-full px-6 py-2 opacity-70 duration-500 hover:scale-[98%] hover:bg-neutral-300/60 hover:opacity-100 active:scale-[95%] active:opacity-50 hover:dark:bg-neutral-700/30"
                      href={link.href}
                      key={link.iconName}
                    >
                      <Icon className="text-2xl" icon={link.iconName} />
                      {link.title && (
                        <span className="font-semibold">{link.title}</span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
            <div className="relative flex items-center justify-end gap-3">
              <div className="relative flex items-center">
                <ThemeToggle />
              </div>
              <div className="relative flex items-center">
                <Me />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
