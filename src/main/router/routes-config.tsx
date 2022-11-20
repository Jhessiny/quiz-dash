import { lazy, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { LayoutConfig } from './layout-config'

const Contacts = lazy(async () => await import('~/presentation/pages/contacts/contacts'))
const Quiz = lazy(async () => await import('~/presentation/pages/quiz/quiz'))

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
    isPrivate: true,
    layout: 'DashboardLayout',
  },
  {
    path: '/contacts',
    element: <Contacts />,
    isPrivate: true,
    layout: 'DashboardLayout',
  },
  {
    path: '/analytics',
    element: <>analytics</>,
    isPrivate: true,
    layout: 'DashboardLayout',
  },
  {
    path: '/quizzes',
    element: <>quizzes</>,
    isPrivate: true,
    layout: 'DashboardLayout',
  },
  {
    path: '/:quizId',
    element: <Quiz />,
    isPrivate: false,
    layout: 'NoLayout',
  },
]
