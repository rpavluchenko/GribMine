'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'

import { unbounded } from '@/app/fonts'
import useAuthMutation from '@/hooks/auth/useAuthMutation'
import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { mutate } = useAuthMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      email: formData.email,
      password: formData.password,
    })
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center pt-16 md:pt-0">
      <div className="flex w-full flex-col gap-4 px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1
            className={`${unbounded.className} text-4xl font-semibold text-neutral-900 md:text-5xl dark:text-neutral-100`}
          >
            Авторизация
          </h1>
          <p className="text-md max-w-2xl text-center font-semibold text-neutral-600 opacity-80 md:text-lg dark:text-neutral-300">
            Чтобы управлять своим аккаунтом вам нужно авторизоваться.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-xl flex-col justify-center gap-2">
            <div className="relative w-full">
              <Icon
                className="absolute top-[19px] left-6 z-[2] text-xl text-neutral-900 dark:text-neutral-100"
                icon="lucide:mail"
              />
              <Input
                autoComplete="email"
                className="w-full px-14 py-3 md:px-16 md:py-4"
                name="email"
                onChange={handleChange}
                placeholder="Введите почту"
                type="email"
                value={formData.email}
              />
            </div>

            <div className="relative w-full">
              <Icon
                className="absolute top-[19px] left-6 z-[2] text-xl text-neutral-900 dark:text-neutral-100"
                icon="lucide:key-round"
              />
              <Input
                autoComplete="current-password"
                className="w-full px-14 py-3 md:px-16 md:py-4"
                name="password"
                onChange={handleChange}
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
              />
            </div>

            <div className="flex flex-col justify-center gap-4 pt-2 text-center md:flex-row md:justify-between md:gap-0">
              <Link
                className="easy-in-out text-sm font-semibold text-neutral-600 underline transition-colors duration-500 hover:text-neutral-400 dark:text-neutral-500"
                href="/discord"
              >
                Забыли пароль?
              </Link>
              <Link
                className="easy-in-out text-sm font-semibold text-emerald-600 underline transition-colors duration-500 hover:text-emerald-400 dark:text-emerald-400 hover:dark:text-emerald-200"
                href="/auth/register"
              >
                Еще нет аккаунта?
              </Link>
            </div>

            <div className="flex items-center justify-center pt-2">
              <Button
                className="flex items-center gap-3 px-4 py-3"
                onClick={handleSubmit}
                variant={'secondary'}
              >
                <Icon className="text-xl" icon="lucide:log-in" />
                <p className="font-semibold">Авторизоваться</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
