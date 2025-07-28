import Image from 'next/image'

interface NewsImageProps {
  src: string
}

export default function NewsImage({ src }: NewsImageProps) {
  const parsed = new URL(src, process.env.NEXT_PUBLIC_API_URL)

  const maxSize = 800

  const originalWidth = parseInt(parsed.searchParams.get('width') ?? '1080')
  const originalHeight = parseInt(parsed.searchParams.get('height') ?? '620')

  let width = originalWidth
  let height = originalHeight

  if (width > maxSize || height > maxSize) {
    const aspectRatio = width / height

    if (aspectRatio >= 1) {
      width = maxSize
      height = Math.round(maxSize / aspectRatio)
    } else {
      height = maxSize
      width = Math.round(maxSize * aspectRatio)
    }
  }

  return (
    <Image
      alt="News image"
      className="mx-auto h-auto w-full max-w-full rounded-2xl border-2 border-emerald-700 dark:border-emerald-600/70"
      height={height}
      quality={100}
      src={parsed.toString()}
      width={width}
    />
  )
}
