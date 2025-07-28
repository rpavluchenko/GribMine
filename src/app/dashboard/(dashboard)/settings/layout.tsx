import LinkTabs from '@/components/dashboard/layout/LinkTabs'
import { settingsTabs } from '@/constants/tabs.constants'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <LinkTabs tabs={settingsTabs} />
      {children}
    </div>
  )
}
