import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function BlockLink({
  className,
  children,
  href = '/',
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      {...rest}
      className={twMerge(
        `shadshadow-xl rounded-2xl border-2 border-emerald-600/70 bg-gradient-to-t from-neutral-100 to-neutral-50 shadow-emerald-300/50 transition-transform duration-500 ease-in-out dark:from-neutral-900/40 dark:to-neutral-950 dark:shadow-emerald-900/20`,
        className
      )}
    >
      {children}
    </Link>
  )
}
