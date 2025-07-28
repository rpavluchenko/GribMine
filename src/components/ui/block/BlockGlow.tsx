import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function BlockGlow({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={twMerge(
        `rounded-xl border-2 border-emerald-200/70 px-10 py-8 text-left shadow-md transition-all duration-400 ease-in-out hover:border-emerald-300 hover:bg-neutral-100/30 hover:shadow-xl hover:shadow-emerald-300/50 dark:border-emerald-200/20 dark:bg-neutral-900 dark:hover:shadow-emerald-300/20`,
        className
      )}
    >
      {children}
    </div>
  )
}
