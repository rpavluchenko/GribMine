import Link from 'next/link'
import { useRef, useState } from 'react'
import { Icon } from '@iconify/react'

import { links, mobileLinks } from '@/constants/links.constants'
import useClickOutside from '@/hooks/useClickOutside'

export default function NavMobile() {
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

  return (
    <>
      <button
        className="cursor-pointer items-center"
        onClick={toggleMenu}
        ref={buttonRef}
      >
        <Icon
          className="text-2xl text-black dark:text-white"
          icon="lucide:menu"
        />
      </button>

      <div className="relative z-[2]" ref={menuRef}>
        <div
          className={`gird absolute top-14 min-w-64 origin-top-left gap-4 rounded-2xl border-2 border-neutral-800 bg-neutral-100 p-4 shadow-md transition-all duration-300 ease-in-out dark:border-neutral-500 dark:bg-neutral-950 dark:text-neutral-100 ${
            isMenuOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
          }`}
        >
          <div className="grid gap-5">
            {links.map((link) => (
              <Link
                className="flex w-fit items-center gap-2 duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
                href={link.href}
                key={link.iconName}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="text-2xl" icon={link.iconName} />
                <span className="font-semibold">{link.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4">
            {mobileLinks.map((socLink) => (
              <Link
                className="flex items-center gap-2 rounded-xl duration-500 hover:scale-[98%] hover:opacity-70 active:scale-[95%] active:opacity-50"
                href={socLink.href}
                key={socLink.iconName}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="text-2xl" icon={socLink.iconName} />
                <span className="font-semibold">{socLink.title}</span>
                <Icon className="ml-auto size-5" icon="lucide:external-link" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
