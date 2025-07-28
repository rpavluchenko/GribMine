import { Icon } from '@iconify/react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

import PopUp from '@/components/ui/popUP/popUP'
import Button from '@/components/ui/button/Button'
import { unbounded } from '@/app/fonts'
import useUpdateNews from '@/hooks/news/useUpdateNews'
import Input from '@/components/ui/input/Input'
import { newsFields } from '@/constants/newsFields.constants'

interface Props {
  isOpen: boolean
  id: number
  onClose: () => void
}

export default function EditPopUp({ isOpen, id, onClose }: Props) {
  const [formUpdateData, setformUpdateData] = useState({
    author: '',
    title: '',
    sub_title: '',
    content: '',
    image_url: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setformUpdateData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader.result) {
          setformUpdateData((prev) => ({
            ...prev,
            image_url: reader.result as string,
          }))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const { mutate: editNews, isPending } = useUpdateNews()

  const uploadImageToServer = async (base64Image: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/news/img/upload`,
        { image: base64Image },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data.url
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error)
      throw error
    }
  }

  const handleSubmit = async () => {
    try {
      const uploadedImageUrl = await uploadImageToServer(
        formUpdateData.image_url
      )

      editNews(
        {
          id: id,
          data: {
            author: formUpdateData.author,
            title: formUpdateData.title,
            content: formUpdateData.content.replace(/\n/g, '<br />'),
            sub_title: formUpdateData.sub_title,
            image_url: uploadedImageUrl,
          },
        },
        {
          onSuccess: () => {
            onClose()
          },
        }
      )
    } catch {
      toast.error('Не удалось загрузить изображение')
    }
  }

  return (
    <PopUp
      extraAction={
        <Button
          className="flex items-center gap-2 px-6 py-2 text-white hover:scale-103 active:scale-97"
          disabled={isPending}
          onClick={handleSubmit}
        >
          <Icon
            className="text-neutral-700 dark:text-neutral-200"
            icon="lucide:check"
          />
          <p className="font-semibold text-neutral-700 dark:text-neutral-200">
            Подтвердить
          </p>
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col gap-3">
        <h2 className={`${unbounded.className} text-center text-2xl font-bold`}>
          Редактирование поста{' '}
          <span className="font-semibold text-emerald-500">{id}</span>
        </h2>
        <form className="flex w-full max-w-xl flex-col justify-center gap-2">
          {newsFields.map(({ icon, name, placeholder }) => (
            <div className="relative w-full" key={name}>
              <Icon
                className="absolute top-[16px] left-6 z-[2] text-xl text-neutral-900 md:top-[19px] dark:text-neutral-100"
                icon={icon}
              />
              {name === 'content' ? (
                <textarea
                  className="w-full resize-y rounded-xl border-2 border-neutral-300 bg-gray-50 px-14 py-3 font-semibold text-neutral-900 transition-all duration-500 ease-in-out outline-none placeholder:text-neutral-500 hover:border-emerald-700 focus:border-emerald-500 md:px-16 md:py-4 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-400"
                  name={name}
                  onChange={handleChange}
                  placeholder={placeholder}
                  rows={4}
                  value={
                    formUpdateData[name as keyof typeof formUpdateData] || ''
                  }
                />
              ) : name === 'image_url' ? (
                <div className="relative w-full">
                  <Input
                    accept="image/*"
                    className="w-fit max-w-md cursor-pointer px-14 py-3 md:px-16 md:py-4"
                    onChange={handleImageChange}
                    type="file"
                  />
                </div>
              ) : (
                <Input
                  className="w-full px-14 py-3 md:px-16 md:py-4"
                  name={name}
                  onChange={handleChange}
                  placeholder={placeholder}
                  type="text"
                  value={
                    formUpdateData[name as keyof typeof formUpdateData] || ''
                  }
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </PopUp>
  )
}
