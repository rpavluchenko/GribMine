import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { INews } from '@/types/news.types'

const useDeleteNews = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) =>
      axios.delete<INews>(`${process.env.NEXT_PUBLIC_API_URL}/v1/news/${id}`, {
        withCredentials: true,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] })
    },
  })
}

export default useDeleteNews
