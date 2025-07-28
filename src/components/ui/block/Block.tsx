import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@iconify/react'

import { unbounded } from '@/app/fonts'
export interface IBlockProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string
  heading?: ReactNode
}

export default function Block({
  children,
  className,
  heading,
  icon = 'lucide:circle-help',
  ...rest
}: IBlockProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        `rounded-xl border-2 border-emerald-300/50 shadow-lg shadow-emerald-400/30 transition-transform duration-500 ease-in-out dark:shadow-emerald-800/50`,
        className
      )}
    >
      {heading && (
        <div className="flex items-center gap-3">
          <Icon
            className="text-xl text-emerald-800 dark:text-emerald-100"
            icon={icon}
          />
          <h1
            className={`${unbounded.className} text-lg font-medium text-emerald-800 dark:text-emerald-100`}
          >
            {heading}
          </h1>
        </div>
      )}
      {children}
    </div>
  )
}
