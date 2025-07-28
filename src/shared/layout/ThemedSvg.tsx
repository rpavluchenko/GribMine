// KryptonFox @ 31-01-2025
'use client'
import { useTheme } from 'next-themes'
import Image, { type ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'src'> {
  // path to image from /svg/{theme}/
  name: string
}

export default function ThemedSvg(props: Props) {
  const { name, ...rest } = props
  const { resolvedTheme } = useTheme()
  // alt already in rest

  return <Image src={`/svg/${resolvedTheme ?? 'light'}/${name}`} {...rest} />
}
