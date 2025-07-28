'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logout() {
  const cookie = await cookies()
  if (cookie.has('refreshToken')) {
    cookie.delete('accessToken')
    cookie.delete('refreshToken')
    redirect('/')
  }
}
