'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'

import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import useRegisterMutation from '@/hooks/auth/useRegisterMutation'
import { Header, RegPopUP, Checkbox } from '@/components/auth/register/index'
import { regFields } from '@/constants/regFields.constants'

export default function RegisterPage() {
  const [isAgree, setIsAgree] = useState(false)
  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { mutate, isLoading } = useRegisterMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { login, email, password, confirmPassword } = formData
    if (!login || !email || !password || !confirmPassword) {
      console.log(formData)
      toast.error('Пожалуйста, заполните все поля.')
      return
    }
    if (password !== confirmPassword) {
      toast.error('Пароли не совпадают!')
      return
    }

    setIsOpenPopUp(true)
  }

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center pt-16">
        <div className="flex w-full flex-col gap-4 px-8 lg:px-16">
          <Header />
          <div className="flex items-center justify-center">
            <form
              className="flex w-full max-w-xl flex-col justify-center gap-2"
              onSubmit={handleSubmit}
            >
              {regFields.map(({ icon, name, placeholder, type = 'text' }) => (
                <div className="relative w-full" key={name}>
                  <Icon
                    className="absolute top-[16px] left-6 z-[2] text-xl text-neutral-900 md:top-[19px] dark:text-neutral-100"
                    icon={icon}
                  />
                  <Input
                    autoComplete={
                      name === 'password'
                        ? 'new-password'
                        : name === 'confirmPassword'
                          ? 'new-password'
                          : name
                    }
                    className="w-full px-14 py-3 md:px-16 md:py-4"
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={type}
                    value={formData[name as keyof typeof formData] || ''}
                  />
                </div>
              ))}

              <div className="flex flex-col items-center justify-center gap-4 pt-2 md:flex-row md:gap-0 lg:justify-between lg:gap-8">
                <Checkbox
                  isAgree={isAgree}
                  onChange={() => setIsAgree((prev) => !prev)}
                />
                <Link
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                  href="/auth"
                >
                  <p className="text-sm font-semibold text-emerald-600 underline dark:text-emerald-400">
                    Уже есть аккаунт?
                  </p>
                </Link>
              </div>

              <div className="flex items-center justify-center pt-2">
                <Button
                  className="flex items-center gap-3 px-4 py-3"
                  disabled={!isAgree}
                  loading={isLoading}
                  onClick={handleSubmit}
                  variant="secondary"
                >
                  <Icon className="text-xl" icon="lucide:log-in" />
                  <p className="font-semibold">Зарегистрироваться</p>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <RegPopUP
        isOpen={isOpenPopUp}
        login={formData.login}
        onClose={() => setIsOpenPopUp(false)}
        onConfirm={() => {
          setIsOpenPopUp(false)
          mutate({
            login: formData.login,
            email: formData.email,
            password: formData.password,
          })
        }}
      />
    </>
  )
}
