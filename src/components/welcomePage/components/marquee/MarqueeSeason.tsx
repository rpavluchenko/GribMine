'use client'

import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function MarqueeSeason() {
  const images = ['1', '2', '3', '4', '5']
  const { resolvedTheme } = useTheme()

  return (
    <Marquee
      autoFill={true}
      gradient={true}
      gradientColor={resolvedTheme == 'dark' ? '#0a0a0a' : '#f5f5f5'}
      gradientWidth={'3%'}
      loop={0}
      speed={30}
    >
      {images.map((image) => (
        <div
          className="relative m-1 mx-6 h-[200px] w-[300px] sm:h-[300px] sm:w-[450px]"
          key={image}
        >
          <Image
            alt={`Image of ${image}`}
            className="mx-6 rounded-xl outline-3 outline-offset-[-3px] outline-neutral-200/30 dark:outline-neutral-800/30"
            fill
            quality={100}
            src={`/img/season/${image}.png`}
          />
        </div>
      ))}
    </Marquee>
  )
}
