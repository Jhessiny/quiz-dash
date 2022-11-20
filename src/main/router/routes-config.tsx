import { ReactNode } from 'react'
import Contacts from '~/presentation/pages/contacts/contacts'
import { LayoutConfig } from './layout-config'

export type IRoute = {
  path: string
  element: ReactNode
  isPrivate: boolean
  layout: keyof typeof LayoutConfig
}

export const appRoutes: IRoute[] = [
  {
    path: '/',
    element: <Contacts />,
    isPrivate: false,
    layout: 'DashboardLayout',
  },
]
