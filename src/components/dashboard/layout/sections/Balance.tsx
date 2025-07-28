'use client'

import { useMeQuery } from '@/queries/Me'
import BlockLink from '@/components/ui/block/BlockLink'

export default function DashboardBalance() {
  const { data } = useMeQuery()

  return (
    <BlockLink
      className="cursor-pointer px-3 py-2 hover:scale-96 lg:px-6"
      href="/dashboard/purchase"
    >
      <p className="text-lg font-medium text-nowrap">
        {data?.profile?.balance ?? 0} ₽
      </p>
    </BlockLink>
  )
}
