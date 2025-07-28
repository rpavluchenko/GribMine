import Image from 'next/image'
import { Icon } from '@iconify/react'

import { unbounded } from '@/app/fonts'
import event1 from '@/public/img/events/1.png'
import event2 from '@/public/img/events/2.png'
import event3 from '@/public/img/events/3.png'

export default function EventsPage() {
  const eventImages = [event1, event2, event3]
  return (
    <section className="my-12 grid gap-12 lg:my-20 lg:grid-cols-2 lg:gap-32">
      <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
        {eventImages.map((image, index) => (
          <Image
            alt={`event ${index}`}
            className="h-48 transform rounded-xl object-cover outline-4 outline-offset-[-3px] outline-neutral-200/30 duration-500 ease-in-out hover:scale-102 lg:last:col-span-2 dark:outline-neutral-800/50"
            key={index}
            src={image}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <div className="flex items-center gap-3">
          <Icon
            className="text-3xl text-neutral-800 md:text-4xl lg:text-left dark:text-neutral-100"
            icon="lucide:calendar-range"
          />
          <h1
            className={`${unbounded.className} text-center text-4xl font-semibold text-neutral-800 md:text-5xl lg:text-left dark:text-neutral-100`}
          >
            Ивенты
          </h1>
        </div>
        <p className="max-w-5xl text-center text-xl font-medium text-neutral-700 md:text-2xl lg:text-left dark:text-neutral-100/90">
          На нашем сервере регулярно организуются разнообразные ивенты и
          дружеские посиделки. Обычно мы собираемся вместе, чтобы пообщаться,
          обсудить различные темы и просто приятно провести время.
        </p>
      </div>
    </section>
  )
}
