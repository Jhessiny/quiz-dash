import { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { LayoutConfig } from './layout-config'
import { RiContactsBook2Fill, RiLineChartFill, RiAddCircleFill } from 'react-icons/ri'
import { MdQuiz } from 'react-icons/md'

import Contacts from '~/presentation/pages/contacts/contacts'
import Analytics from '~/presentation/pages/analytics/analytics'
import Quiz from '~/presentation/pages/quiz/quiz'

export type IRoute = {
  path: string
  element: ReactElement
  isPrivate: boolean
  layout: keyof typeof LayoutConfig
  menuLink?: {
    label: string
    icon: ReactNode
  }
}

export const appRoutes: IRoute[] = [
  {
    path: '/admin',
    element: <Navigate to='/admin/contacts' />,
    isPrivate: true,
    layout: 'DashboardLayout',
  },
  {
    path: '/admin/contacts',
    element: <Contacts title='Contacts' />,
    isPrivate: true,
    layout: 'DashboardLayout',
    menuLink: {
      label: 'contacts',
      icon: <RiContactsBook2Fill />,
    },
  },
  {
    path: '/admin/analytics',
    element: <Analytics title='Analytics' />,
    isPrivate: true,
    layout: 'DashboardLayout',
    menuLink: {
      label: 'analytics',
      icon: <RiLineChartFill />,
    },
  },
  {
    path: '/admin/quizzes',
    element: <>quizzes</>,
    isPrivate: true,
    layout: 'DashboardLayout',
    menuLink: {
      label: 'quizzes',
      icon: <MdQuiz />,
    },
  },
  {
    path: '/admin/new-quiz',
    element: <>new quiz</>,
    isPrivate: true,
    layout: 'DashboardLayout',
    menuLink: {
      label: 'new quiz',
      icon: <RiAddCircleFill />,
    },
  },
  {
    path: '/:quizId',
    element: <Quiz />,
    isPrivate: false,
    layout: 'NoLayout',
  },
]

export const menuRoutes = appRoutes.filter((item) => item.menuLink)
