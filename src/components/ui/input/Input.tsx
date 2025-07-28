import { useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@iconify/react'

export default function Input({
  className,
  type = 'text',
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative w-full">
      <input
        {...rest}
        className={twMerge(
          `w-full rounded-xl border-2 border-neutral-300 bg-gray-50 pr-10 font-semibold text-neutral-900 transition-all duration-500 ease-in-out outline-none placeholder:text-neutral-500 hover:border-emerald-700 focus:border-emerald-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-400`,
          className
        )}
        type={type === 'password' && showPassword ? 'text' : type}
      />
      {type === 'password' && (
        <button
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          onClick={handleTogglePassword}
          type="button"
        >
          <div className="relative h-5 w-5">
            <Icon
              className={`absolute inset-0 text-xl transition-opacity duration-300 ease-in-out ${
                showPassword ? 'opacity-0' : 'opacity-100'
              }`}
              icon="lucide:eye"
            />
            <Icon
              className={`absolute inset-0 text-xl transition-opacity duration-300 ease-in-out ${
                showPassword ? 'opacity-100' : 'opacity-0'
              }`}
              icon="lucide:eye-off"
            />
          </div>
        </button>
      )}
    </div>
  )
}
