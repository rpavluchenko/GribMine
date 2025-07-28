import GribID from '@/components/dashboard/settings/gribID/GribID'
import ResetPassword from '@/components/dashboard/settings/gribID/ResetPass'

export default function GribIDPage() {
  return (
    <section className="mx-2 my-8 grid items-start gap-8 lg:grid-cols-2">
      <div className="grid gap-8">
        <GribID />
      </div>
      <div className="grid gap-8">
        <ResetPassword />
      </div>
    </section>
  )
}
