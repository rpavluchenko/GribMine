'use client'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  const queryClient = useRef<QueryClient>(new QueryClient())
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient.current}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
