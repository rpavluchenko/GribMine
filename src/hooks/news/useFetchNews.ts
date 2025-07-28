import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import type { INews } from '@/types/news.types'

const LIMIT = 2

type NewsResponse = {
  items: INews[]
  total: number
}

export default function useNews(page: number) {
  const offset = (page - 1) * LIMIT

  return useQuery<NewsResponse>({
    queryKey: ['news', page, offset],
    queryFn: async () => {
      const { data } = await axios.get<NewsResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/news`,
        {
          params: { offset, limit: LIMIT },
        }
      )
      return data
    },
    refetchOnWindowFocus: false,
  })
}
