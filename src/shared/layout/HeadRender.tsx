import { useRef, useEffect, useState, useCallback } from 'react'

interface HeadRenderProps {
  skinUrl: string
  fallbackUrl?: string
  size?: number
  className?: string
}

export default function HeadRender({
  skinUrl,
  fallbackUrl = '/img/default.png',
  size = 64,
  className,
}: HeadRenderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imgSrc, setImgSrc] = useState(skinUrl)

  const renderHead = useCallback(
    (src: string) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = src

      img.onload = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 8
        canvas.height = 8

        ctx.imageSmoothingEnabled = false

        ctx.clearRect(0, 0, 8, 8)
        ctx.drawImage(img, 8, 8, 8, 8, 0, 0, 8, 8)
        ctx.drawImage(img, 40, 8, 8, 8, 0, 0, 8, 8)
      }

      img.onerror = () => {
        if (src !== fallbackUrl) {
          setImgSrc(fallbackUrl)
        }
      }
    },
    [fallbackUrl]
  )

  useEffect(() => {
    renderHead(imgSrc)
  }, [imgSrc, renderHead])

  return (
    <canvas
      className={`rounded-2xl ${className}`}
      ref={canvasRef}
      style={{
        imageRendering: 'pixelated',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}
