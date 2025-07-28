import React from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface NewsDateProps {
  date: Date | string
}

const NewsDate: React.FC<NewsDateProps> = ({ date }) => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date

  const formattedDate = format(parsedDate, "d MMMM yyyy 'года в' HH:mm", {
    locale: ru,
  })

  return (
    <p
      className={`text-[15px] font-semibold text-neutral-800 dark:text-neutral-300/80`}
    >
      {formattedDate}
    </p>
  )
}

export default NewsDate
