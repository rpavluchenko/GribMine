import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

interface Props {
  createdAt: Date
}

export default function DashboardFDate({ createdAt }: Props) {
  const date = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ru,
  })

  return date
}
