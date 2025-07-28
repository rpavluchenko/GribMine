import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

type LoginResponse = {
  code: string
}

const getErrorMessage = (code: string | undefined): string => {
  const messages: Record<string, string> = {
    '0': 'Неверный Email или пароль!',
    '2': 'Пароль должен быть не менее 8 символов!',
    '3': 'Введите Email!',
    '4': 'Неправильный Email!',
  }

  return messages[code ?? ''] ?? `Неизвестная ошибка. Код: ${code ?? '?'}`
}

export default function useAuthMutation() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const mutation = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: { email: string; password: string }) =>
      axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`,
        data,
        {
          withCredentials: true,
        }
      ),
    onSuccess: (res) => {
      const code = res.data?.code

      if (code === '1') {
        queryClient.invalidateQueries({ queryKey: ['me'] })
        toast.success('Успешная авторизация!')
        router.replace('/dashboard')
      } else {
        toast.error(`Ошибка авторизации! Код: ${code}`)
        router.replace('/auth')
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const code = error.response?.data?.code
        toast.error(getErrorMessage(code))
      } else {
        toast.error('Что-то пошло не так.')
      }
      router.replace('/auth')
    },
  })

  return {
    ...mutation,
    isLoading: mutation.isPending,
  }
}
