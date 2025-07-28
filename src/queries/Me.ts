import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import type { IUser } from '@/types/user.types'
import logout from '@/actions/logout'
import { api } from '@/utils/axiosInstance'

async function getUser(): Promise<IUser> {
  try {
    const res = await api.get<IUser>('/v1/user/me')
    return res.data
  } catch (error) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 401 &&
      error.response.data !== 'No token'
    ) {
      await logout()
    }
    throw error
  }
}

export const useMeQuery = () =>
  useQuery<IUser, Error>({
    queryKey: ['me'],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    retry: false,
  })
