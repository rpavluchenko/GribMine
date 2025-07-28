import crypto from 'crypto'

import type { NextConfig } from 'next'
import utwm from 'unplugin-tailwindcss-mangle/webpack'

function generateWhyHash(original: string): string {
  const hash = crypto
    .createHash('sha256')
    .update(original)
    .digest('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .slice(0, 6)

  return `why-${hash}`
}

const cache = new Map<string, string>()

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        utwm({
          classGenerator: {
            classPrefix: 'why-',
            customGenerate: (original) => {
              if (cache.has(original)) return cache.get(original)
              const hashed = generateWhyHash(original)
              cache.set(original, hashed)
              return hashed
            },
          },
        })
      )
      return config
    }
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/server-access',
        permanent: true,
      },
      {
        source: '/dashboard/settings',
        destination: '/dashboard/settings/gribid',
        permanent: true,
      },
      { source: '/auth', destination: '/auth/login', permanent: true },
      { source: '/admin', destination: '/admin/news', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.gribmine.ru',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
