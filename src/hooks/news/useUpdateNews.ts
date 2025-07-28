import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { INews } from '@/types/news.types'

type UpdateNewsData = Omit<INews, 'id' | 'created_at'>

interface UpdateNewsArgs {
  id: number
  data: UpdateNewsData
}

const useUpdateNews = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: UpdateNewsArgs) =>
      axios.patch<INews>(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/news/update/${id}`,
        data,
        { withCredentials: true }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] })
    },
  })
}

export default useUpdateNews
