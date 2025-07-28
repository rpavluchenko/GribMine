export interface LinkTab {
  title: string
  href: string
  icon: string
}

export const dashboardLayoutTabs: LinkTab[] = [
  {
    title: 'Доступ на сервер',
    href: '/dashboard/server-access',
    icon: 'lucide:lock-keyhole-open',
  },
  { title: 'Новости', href: '/dashboard/news', icon: 'lucide:newspaper' },
  {
    title: 'Настройки',
    href: '/dashboard/settings/gribid',
    icon: 'lucide:settings',
  },
]

export const settingsTabs: LinkTab[] = [
  {
    title: 'GribID',
    href: '/dashboard/settings/gribid',
    icon: 'lucide:id-card',
  },
  {
    title: 'Удалить аккаунт',
    href: '/dashboard/settings/delete',
    icon: 'lucide:user-round-x',
  },
]

export const adminLayoutTabs: LinkTab[] = [
  { title: 'Новости', href: '/admin/news', icon: 'lucide:file-pen-line' },
  { title: 'Пользователи', href: '/admin/users', icon: 'lucide:user-pen' },
]
