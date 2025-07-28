import type { Metadata } from 'next'

import '@/shared/styles/globals.css'
import Nav from '@/shared/layout/nav/Nav'
import Providers from '@/app/providers'
import { raleway } from '@/app/fonts'
import FooterLayout from '@/shared/layout/Footer'
import RootTransitionEffect from '@/shared/transitionEffects/PageTransitionEffect'
import CustomToaster from './CustomToaster'

export const metadata: Metadata = {
  title: 'GribMine',
  description:
    'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
  openGraph: {
    type: 'website',
    title: 'GribMine',
    description:
      'Ванильный Minecraft сервер. Мы - дружная команда, которая старается сделать сервер лучше и комфортнее для игроков. Мы создаём сервер не ради донатов, а ради игроков и общения. Играй под светом звёзд — создай своё созвездие!',
    url: 'https://gribmine.ru',
    siteName: 'GribMine',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} bg-neutral-100 transition-colors duration-500 ease-in-out dark:bg-neutral-950`}
      >
        <Providers>
          <CustomToaster />
          <Nav />
          <RootTransitionEffect>
            {children}
            <FooterLayout />
          </RootTransitionEffect>
        </Providers>
      </body>
    </html>
  )
}
