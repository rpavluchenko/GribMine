'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'
import clsx from 'clsx'

import Block from '@/components/ui/block/Block'
import Button from '@/components/ui/button/Button'
import { useBuyMutation } from '@/hooks/bills/useBuyMutation'
import { useMeQuery } from '@/queries/Me'
import Input from '@/components/ui/input/Input'

export default function BuyKofi() {
  const { mutate: buyAccess, isLoading } = useBuyMutation()
  const { data } = useMeQuery()
  const [amount, setAmount] = useState('1')

  return (
    <Block
      className="flex flex-col gap-4 p-6 font-semibold xl:p-8 dark:text-neutral-200"
      heading="Поддержите проект"
      icon="lucide:hand-coins"
    >
      <p>
        Если вам нравится проект и вы хотите поддержать его развитие — вы можете
        оставить небольшой донат. Это поможет нам двигаться дальше.
      </p>

      <div className="relative grid gap-4">
        <Icon
          className="absolute left-3 z-[2] text-xl text-neutral-900 md:top-[14.5px] dark:text-neutral-100"
          icon="lucide:badge-russian-ruble"
        />
        <Input
          className="w-fit px-10 py-2.5"
          min={1}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Количество"
          type="number"
          value={amount}
        />
        <Button
          className={clsx(
            'flex w-fit items-center gap-2 px-6 py-2 text-white',
            !Number(amount)
              ? 'shadow-transparent hover:scale-100 active:scale-100'
              : 'hover:scale-103 active:scale-97'
          )}
          disabled={!Number(amount)}
          loading={isLoading}
          onClick={() => {
            buyAccess({
              email: data?.email ?? '',
              products: { 928699: Number(amount) },
            })
          }}
        >
          <Icon
            className="text-neutral-700 dark:text-neutral-200"
            icon="lucide:check"
          />
          <p className="font-semibold text-neutral-700 dark:text-neutral-200">
            Оплатить
          </p>
        </Button>
      </div>
    </Block>
  )
}
