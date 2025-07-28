import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import type { IPrice } from '@/types/price.types'

const usePrice = () =>
  useQuery({
    queryKey: ['price'],
    queryFn: () =>
      axios.get<IPrice>(`${process.env.NEXT_PUBLIC_API_URL}/v1/bills/price`),
    select: (res) => res.data,
    staleTime: Infinity,
  })

export default usePrice
