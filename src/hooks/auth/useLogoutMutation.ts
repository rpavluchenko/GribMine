import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useLogoutMutation() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      ),
    onSuccess: async () => {
      router.push('/')
      document.cookie =
        'accessToken=; Path=/; Domain=.gribmine.ru; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      await queryClient.resetQueries({ queryKey: ['me'] })
    },
    onError: () => {
      router.push('/')
    },
  })
}
