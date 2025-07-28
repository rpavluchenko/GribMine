import { Icon } from '@iconify/react'

import PopUp from '@/components/ui/popUP/popUP'
import Button from '@/components/ui/button/Button'
import { unbounded } from '@/app/fonts'

interface Props {
  isOpen: boolean
  login: string
  onConfirm: () => void
  onClose: () => void
}

export default function RegPopUp({ isOpen, login, onConfirm, onClose }: Props) {
  return (
    <PopUp
      extraAction={
        <Button
          className="flex items-center gap-2 px-6 py-2 text-white hover:scale-103 active:scale-97"
          onClick={onConfirm}
        >
          <Icon icon="lucide:check" />
          <p className="font-semibold">Подтвердить</p>
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-3">
        <h2 className={`${unbounded.className} text-xl font-bold`}>
          Подтверждение регистрации
        </h2>
        <p className="font-semibold">
          Вы уверены, что хотите зарегистрироваться с логином {'"'}
          <span className="font-semibold text-emerald-500">{login}</span>
          {'"'}?
          <br />
          <span className="font-bold text-red-600 dark:text-red-500">
            После регистрации его нельзя будет изменить! Он также будет
            использован для приобретения товаров.
          </span>
        </p>
      </div>
    </PopUp>
  )
}
