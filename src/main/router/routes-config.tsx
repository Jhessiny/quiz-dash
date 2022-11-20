import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
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
    element: <Navigate to='/contacts' />,
    isPrivate: false,
    layout: 'DashboardLayout',
  },
  {
    path: '/contacts',
    element: <Contacts />,
    isPrivate: false,
    layout: 'DashboardLayout',
  },
  {
    path: '/analytics',
    element: <>analytics</>,
    isPrivate: false,
    layout: 'DashboardLayout',
  },
  {
    path: '/quizzes',
    element: <>quizzes</>,
    isPrivate: false,
    layout: 'DashboardLayout',
  },
]
