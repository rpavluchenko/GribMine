'use client'

import { useMeQuery } from '@/queries/Me'
import HeadRender from '@/shared/layout/HeadRender'

export default function DashboardAvatar() {
  const { data } = useMeQuery()

  return (
    <div className="hidden md:block">
      {!!data?.login && (
        <HeadRender
          className="rounded-2xl border-2 border-emerald-300/50 duration-500 ease-in-out hover:scale-[104%]"
          size={70}
          skinUrl={`${process.env.NEXT_PUBLIC_API_URL}/skin/${data?.login}.png?${Date.now()}`}
        />
      )}
    </div>
  )
}
