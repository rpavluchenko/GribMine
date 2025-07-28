'use client'

import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'

import Button from '@/components/ui/button/Button'

export default function CopyIPButton() {
  const handleButtonClick = () => {
    navigator.clipboard.writeText('GribMine.ru')
    toast.success('IP скопирован!')
  }

  return (
    <Button
      className="group flex w-fit items-center gap-2 px-4 py-2 hover:scale-102 active:scale-96 active:opacity-70"
      onClick={handleButtonClick}
    >
      <Icon
        className="text-xl transition-transform duration-300 group-hover:-rotate-6 group-active:-rotate-0"
        icon="lucide:clipboard-copy"
      />
      <p className="font-semibold">Скопировать IP</p>
    </Button>
  )
}
