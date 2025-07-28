import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { unbounded } from '@/app/fonts'
import BlockAdaptive from '@/components/ui/block/Block'
import PopUp from '@/components/ui/popUP/popUP'
import useSvg from '@/hooks/useSvg'
import useAccessPrice from '@/hooks/bills/useAccessPrice'
import Button from '@/components/ui/button/Button'
import { useBuyMutation } from '@/hooks/bills/useBuyMutation'
import { useMeQuery } from '@/queries/Me'
import Input from '@/components/ui/input/Input'

export default function WithoutAccessBlock() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false)
  const [accessType, setAccessType] = useState<'month' | 'forever'>('forever')
  const { accessPrices } = useAccessPrice()
  const selectedPrice = accessPrices?.[accessType]
  const { mutate: buyAccess, isLoading } = useBuyMutation()
  const { data } = useMeQuery()
  const [coupon, setCoupon] = useState('')

  const svgPath = useSvg()

  const getProductId = () => (accessType === 'month' ? 966396 : 880862)

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value.trim())
  }

  return (
    <>
      <BlockAdaptive
        className="flex flex-col gap-3 p-6 font-semibold lg:p-8"
        heading="Доступ на сервер"
        icon="lucide:gamepad-2"
      >
        <p>У вас нет доступа на сервер</p>
        <p className="dark:text-neutral-300/95">Всего один шаг до входа.</p>

        <Button
          className="flex w-fit items-center gap-3 px-4 py-2 hover:scale-102 active:scale-96 dark:text-neutral-100/95"
          onClick={() => setIsOpenPopUp(true)}
        >
          <Icon className="text-xl" icon="lucide:shopping-basket" />
          <p className="hidden md:block">Приобрести доступ на сервер</p>
          <p className="block md:hidden">Приобрести</p>
        </Button>
      </BlockAdaptive>

      <PopUp
        extraAction={
          <Button
            className="flex items-center gap-2 px-6 py-2 text-white hover:scale-103 active:scale-97"
            disabled={isLoading}
            onClick={() => {
              buyAccess({
                email: data?.email ?? '',
                product_id: getProductId(),
                coupon: coupon,
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
        }
        isOpen={isOpenPopUp}
        onClose={() => setIsOpenPopUp(false)}
      >
        <div className="grid items-center gap-4">
          <div className="relative flex justify-center">
            <Image
              alt="Buy access"
              height={92}
              src={`${svgPath}shopping-basket.svg`}
              width={92}
            />
            <div className="absolute size-20 rounded-full bg-emerald-200/45 blur-[30px]" />
          </div>

          <div className="flex justify-center gap-4">
            <Button
              className={`px-4 py-2 font-semibold ${
                accessType === 'month'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setAccessType('month')}
            >
              На 1 месяц
            </Button>
            <Button
              className={`px-4 py-2 font-semibold ${
                accessType === 'forever'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setAccessType('forever')}
            >
              На сезон
            </Button>
          </div>

          <div className="grid w-full gap-2">
            <label
              className="text-[15px] font-semibold text-neutral-400 dark:text-neutral-300"
              htmlFor="input"
            >
              Промокод{' '}
              <span className="text-neutral-400/60 dark:text-neutral-500">
                (необязательно)
              </span>
            </label>

            <div className="flex items-center">
              <Input
                className="w-full px-6 py-[10px]"
                id="referral"
                onChange={handleCouponChange}
                placeholder="Введите промокод"
                type="text"
                value={coupon}
              />

              <Icon
                className="ml-3 text-2xl text-neutral-700 dark:text-neutral-200"
                icon="lucide:tag"
              />
            </div>
          </div>

          <div className="grid gap-2 text-center">
            <h1
              className={`${unbounded.className} text-lg font-semibold dark:text-neutral-100`}
            >
              Вы уверены, что хотите оплатить доступ на сервер?
            </h1>
            {selectedPrice && (
              <p className="text-md font-semibold">
                Стоимость доступа: {selectedPrice.final} ₽{' '}
                {selectedPrice.discount! > 0
                  ? `(Скидка: ${selectedPrice.discount}%)`
                  : `(Цена без скидки)`}
              </p>
            )}

            <p className={`text-md font-semibold`}>
              Нажимая кнопку/и, вы автоматически соглашаетесь с{' '}
              <Link
                className="text-blue-500 underline decoration-blue-500 underline-offset-2 opacity-100 duration-300 hover:text-blue-400 hover:decoration-blue-400 dark:text-sky-500 dark:decoration-sky-500 dark:hover:text-sky-400"
                href="https://grib.gitbook.io/grib_wiki/polzovatelskoe-soglashenie"
              >
                условиями использования
              </Link>
              .
            </p>
          </div>
        </div>
      </PopUp>
    </>
  )
}
