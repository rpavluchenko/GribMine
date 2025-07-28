import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

interface ResetPassResponse {
  code: string
}

const getResetPassErrorMessage = (code: string | undefined): string => {
  const errorMessages: Record<string, string> = {
    '0': 'Неверный старый пароль!',
    '2': 'Пароль должен быть не менее 8 символов!',
  }

  return errorMessages[code ?? ''] ?? `Неизвестная ошибка. Код: ${code ?? '?'}`
}

export default function useResetPassMutation() {
  const mutation = useMutation({
    mutationKey: ['resetPass'],
    mutationFn: (data: { password: string; new_password: string }) =>
      axios.post<ResetPassResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/reset`,
        data,
        {
          withCredentials: true,
        }
      ),
    onSuccess: (res) => {
      const code = res.data?.code

      if (code === '1') {
        toast.success('Пароль успешно изменён!')
      } else {
        toast.error(`Ошибка смены! Код: ${code}`)
      }
    },
    onError: (error) => {
      if (!axios.isAxiosError(error)) {
        toast.error('Что-то пошло не так.')
        return
      }

      const code = (error.response?.data as ResetPassResponse)?.code
      toast.error(getResetPassErrorMessage(code))
    },
  })
  return {
    ...mutation,
    isLoading: mutation.isPending,
  }
}
