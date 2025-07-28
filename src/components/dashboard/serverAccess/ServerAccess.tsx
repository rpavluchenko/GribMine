'use client'

import { useMeQuery } from '@/queries/Me'
import AccessBlock from './components/AccessBlock'
import WithoutAccessBlock from './components/WithoutAccessBlock'

export default function ServerAccess() {
  const { data } = useMeQuery()
  return (
    <>
      {!(data?.profile?.access?.is_buy || data?.profile?.access?.is_gifted) ? (
        <WithoutAccessBlock />
      ) : (
        <AccessBlock />
      )}
    </>
  )
}
