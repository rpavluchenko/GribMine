'use client'

import { useEffect, useRef, useState } from 'react'
import { SkinViewer, IdleAnimation } from 'skinview3d'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { PerspectiveCamera } from 'three'

interface SkinView3dComponentProps {
  skinUrl: string
  width?: number
  height?: number
  className?: string
}

const DEFAULT_SKIN_URL = `${process.env.NEXT_PUBLIC_API_URL}/skin/default.png`

export default function DashboardSkin({
  skinUrl,
  width = 300,
  height = 400,
  className,
}: SkinView3dComponentProps) {
  const containerRef = useRef<HTMLCanvasElement | null>(null)
  const viewerRef = useRef<SkinViewer | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const [resolvedSkinUrl, setResolvedSkinUrl] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false

    const tryLoadSkin = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => resolve(url)
        img.onerror = () => reject(new Error('Skin load failed'))
        img.src = url
      })
    }

    tryLoadSkin(skinUrl)
      .then((url) => {
        if (!canceled) setResolvedSkinUrl(url)
      })
      .catch(() => {
        if (!canceled) setResolvedSkinUrl(DEFAULT_SKIN_URL)
      })

    return () => {
      canceled = true
    }
  }, [skinUrl])

  useEffect(() => {
    if (!containerRef.current || !resolvedSkinUrl) return

    const viewer = new SkinViewer({
      canvas: containerRef.current,
      width: width,
      height: height,
      skin: resolvedSkinUrl,
      model: 'default',
    })

    const controls = new OrbitControls(
      viewer.camera as unknown as PerspectiveCamera,
      containerRef.current
    )
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.rotateSpeed = 0.5
    controls.zoomSpeed = 0.5

    viewerRef.current = viewer
    controlsRef.current = controls

    viewer.animation = new IdleAnimation()

    const animate = () => {
      controls.update()
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      viewer.dispose()
    }
  }, [resolvedSkinUrl, width, height])

  return (
    <canvas
      className={className}
      ref={containerRef}
      style={{ width, height, display: 'block' }}
    />
  )
}
