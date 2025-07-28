import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { INews } from '@/types/news.types'

type CreateNewsData = Omit<INews, 'id' | 'created_at'>

const useCreateNews = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateNewsData) =>
      axios.post<INews>(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/news/create`,
        data,
        {
          withCredentials: true,
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] })
    },
  })
}

export default useCreateNews
