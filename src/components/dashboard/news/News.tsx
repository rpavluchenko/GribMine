'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'motion/react'

import BlockAdaptive from '@/components/ui/block/Block'
import useNews from '@/hooks/news/useFetchNews'
import Pagination from '@/components/dashboard/news/Pagination'
import { raleway, unbounded } from '@/app/fonts'
import Skeleton from '@/components/dashboard/news/Skeleton'
import NewsDate from '@/components/dashboard/news/NewsDate'
import NewsImage from './NewsImage'

type NewsProps = {
  title?: boolean
}

const ITEMS_PER_PAGE = 2

export default function News({ title }: NewsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useNews(currentPage)

  if (isLoading || !data) return <Skeleton />

  const { items, total } = data
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  return (
    <>
      {title && (
        <div className="flex items-center justify-center gap-3">
          <h1
            className={`${unbounded.className} text-5xl text-black dark:text-white`}
          >
            Новости
          </h1>
        </div>
      )}

      {items.length === 0 ? (
        <Skeleton />
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          className="grid gap-8"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          key={currentPage}
          transition={{ duration: 1 }}
        >
          {items.map((item) => (
            <BlockAdaptive className="p-6 lg:p-8" key={item.id}>
              <div>
                <div className="grid items-center justify-start gap-4 text-left">
                  <div className="flex items-center gap-4">
                    <BlockAdaptive className="p-2">
                      <Icon className="text-2xl" icon="clarity:avatar-line" />
                    </BlockAdaptive>
                    <p className="text-xl font-bold text-black dark:text-white">
                      {item.author}
                    </p>
                  </div>
                  <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h1>
                  {item.sub_title && (
                    <h2 className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {item.sub_title}
                    </h2>
                  )}
                  <p
                    className={`${raleway.className} text-[17px] font-semibold text-neutral-800 dark:text-neutral-200`}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  {item.image_url && <NewsImage src={item.image_url} />}
                  <div className="flex items-center gap-4">
                    <Icon
                      className="text-2xl"
                      icon="majesticons:calendar-line"
                    />
                    <NewsDate date={item.created_at} />
                  </div>
                </div>
              </div>
            </BlockAdaptive>
          ))}
        </motion.div>
      )}

      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  )
}
