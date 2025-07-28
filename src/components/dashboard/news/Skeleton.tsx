import { Icon } from '@iconify/react'

import BlockAdaptive from '@/components/ui/block/Block'

export default function Skeleton() {
  return (
    <>
      <BlockAdaptive className="p-6 lg:p-8">
        <div className="grid animate-pulse items-center gap-4">
          <div className="flex items-center gap-4">
            <BlockAdaptive className="p-2">
              <Icon className="text-2xl" icon="clarity:avatar-line" />
            </BlockAdaptive>
            <div className="h-6 w-36 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
          <div className="h-5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-4 w-64 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="grid gap-3">
            <div className="h-3 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-2/4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-4/5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
      </BlockAdaptive>
      <BlockAdaptive className="p-6 lg:p-8">
        <div className="grid animate-pulse items-center gap-4">
          <div className="flex items-center gap-4">
            <BlockAdaptive className="p-2">
              <Icon className="text-2xl" icon="clarity:avatar-line" />
            </BlockAdaptive>
            <div className="h-6 w-36 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
          <div className="h-5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-4 w-64 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="grid gap-3">
            <div className="h-3 w-4/6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-3/5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-4/6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-5/6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
      </BlockAdaptive>
    </>
  )
}
