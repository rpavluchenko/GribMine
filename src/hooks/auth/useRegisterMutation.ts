import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

interface RegisterResponse {
  code: string
}

const getRegisterErrorMessage = (code: string | undefined): string => {
  const messages: Record<string, string> = {
    '0': 'Необходимо заполнить все поля!',
    '2': 'Неправильный Email!',
    '3': 'Пользователь уже зарегистрирован!',
    '4': 'Пароль должен быть не менее 8 символов!',
    '5': 'Произошла ошибка на сервере!',
    '6': 'Неправильный формат логина!',
  }

  return messages[code ?? ''] ?? `Неизвестная ошибка. Код: ${code ?? '?'}`
}

export default function useRegisterMutation() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const mutation = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: { login: string; email: string; password: string }) =>
      axios
        .post<RegisterResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/register`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((response) => response.data),
    onSuccess: () => {
      toast.success('Успешная регистрация!')
      queryClient.invalidateQueries({ queryKey: ['register'] })
      router.replace('/auth/login')
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const code = error.response?.data?.code
        toast.error(getRegisterErrorMessage(code))
      } else {
        toast.error('Что-то пошло не так.')
      }
    },
  })

  return {
    ...mutation,
    isLoading: mutation.isPending,
  }
}
