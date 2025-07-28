import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@iconify/react'

import { baseStyles, variantStyles } from '@/constants/button.constants'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  loading?: boolean
}

export default function Button({
  children,
  className,
  variant = 'primary',
  loading = false,
  disabled,
  ...rest
}: IButtonProps) {
  const isDisabled = disabled || loading

  const disabledStyles = isDisabled
    ? 'opacity-50 hover:bg-transparent cursor-not-allowed'
    : ''

  return (
    <button
      {...rest}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        disabledStyles,
        className
      )}
      disabled={isDisabled}
    >
      {loading ? (
        <Icon className="text-xl" icon="line-md:loading-twotone-loop" />
      ) : (
        children
      )}
    </button>
  )
}
