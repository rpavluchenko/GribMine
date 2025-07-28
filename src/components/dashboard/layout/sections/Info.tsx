'use client'

// import { Icon } from '@iconify/react'
// import { useRef, useState } from 'react'
// import axios from 'axios'
// import toast from 'react-hot-toast'

import { minecraft } from '@/app/fonts'
import { useMeQuery } from '@/queries/Me'
// import ButtonAdaptive from '@/components/ui/button/Button'
import DashboardSkin from './Skin'

export default function DashboardInfo() {
  const { data } = useMeQuery()
  // const fileInputRef = useRef<HTMLInputElement>(null)
  // const [loading, setLoading] = useState(false)

  // const upload = () => {
  //   fileInputRef.current?.click()
  // }

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (!file) return

  //   const reader = new FileReader()

  //   reader.onload = async () => {
  //     const base64 = (reader.result as string).split(',')[1]

  //     try {
  //       setLoading(true)
  //       await axios.post(
  //         `${process.env.NEXT_PUBLIC_API_URL}/v1/skin/upload`,
  //         {
  //           imageBase64: base64,
  //           filename: `${data?.login}.png`,
  //         },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       refetch()
  //       location.reload()
  //     } catch {
  //       toast.error('Произошла ошибка при загрузке')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   reader.readAsDataURL(file)
  // }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className={`${minecraft.className} text-xl`}>{data?.login}</h1>

      <DashboardSkin
        className="rounded-xl bg-neutral-200 shadow-xl shadow-neutral-300 dark:bg-neutral-800/40 dark:shadow-neutral-900"
        height={450}
        skinUrl={`${process.env.NEXT_PUBLIC_API_URL}/skin/${data?.login}.png?${Date.now()}`}
        width={350}
      />

      {/* <input
        accept="image/png"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
      />

      <ButtonAdaptive
        className="flex items-center gap-2 px-4 py-3 hover:scale-102 active:scale-96"
        disabled={loading}
        onClick={upload}
      >
        <Icon className="text-lg" icon="lucide:upload" />
        <p className="font-semibold">
          {loading ? 'Загрузка...' : 'Загрузить скин'}
        </p>
      </ButtonAdaptive> */}
    </div>
  )
}
