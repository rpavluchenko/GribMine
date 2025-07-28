'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'

import BlockAdaptive from '@/components/ui/block/Block'
import { unbounded } from '@/app/fonts'
import Input from '@/components/ui/input/Input'
import useResetPassMutation from '@/hooks/auth/useResetPassMutation'
import Button from '@/components/ui/button/Button'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [new_password, setNewPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

  const resetPassword = useResetPassMutation()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value)
  }

  const isPasswordMatch = new_password === confirm_password

  return (
    <BlockAdaptive className="grid gap-6 px-6 py-6">
      <div className="grid items-center gap-6 lg:flex">
        <div className="flex flex-col gap-2">
          <h1
            className={`${unbounded.className} text-xl font-semibold dark:text-neutral-100`}
          >
            Смена пароля
          </h1>
        </div>
      </div>
      <div className="grid w-full gap-2">
        <div className="flex items-center">
          <Input
            className="w-full px-6 py-[10px]"
            id="password"
            onChange={handlePasswordChange}
            placeholder="Введите старый пароль"
            type="password"
            value={password}
          />
          <Icon
            className="z-[2] ml-3 text-2xl text-neutral-700 dark:text-neutral-200"
            icon="lucide:lock"
          />
        </div>
      </div>
      <div className="grid w-full gap-2">
        <div className="flex items-center">
          <Input
            className="w-full px-6 py-[10px]"
            id="new-password"
            onChange={handleNewPasswordChange}
            placeholder="Введите новый пароль"
            type="password"
            value={new_password}
          />
          <Icon
            className="z-[2] ml-3 text-2xl text-neutral-700 dark:text-neutral-200"
            icon="lucide:lock-keyhole"
          />
        </div>
      </div>
      <div className="grid w-full gap-2">
        <div className="flex items-center">
          <Input
            className="w-full px-6 py-[10px]"
            id="confirm-password"
            onChange={handleConfirmPasswordChange}
            placeholder="Подтвердите новый пароль"
            type="password"
            value={confirm_password}
          />
          <Icon
            className="z-[2] ml-3 text-2xl text-neutral-700 dark:text-neutral-200"
            icon="lucide:lock-keyhole"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button
          className="flex w-fit items-center justify-center gap-2 p-2 hover:scale-102 active:scale-96"
          disabled={resetPassword.isLoading || !isPasswordMatch}
          loading={resetPassword.isLoading}
          onClick={() => {
            if (!isPasswordMatch) {
              toast.error('Пароли не совпадают')
            } else {
              resetPassword.mutate({ password, new_password })
            }
          }}
          variant="danger"
        >
          <Icon className="text-lg" icon="lucide:refresh-ccw" />
          <p className="font-semibold">Сменить пароль</p>
        </Button>
      </div>
    </BlockAdaptive>
  )
}
