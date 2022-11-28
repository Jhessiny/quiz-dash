import { lazy, ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { LayoutConfig } from './layout-config'
import { RiContactsBook2Fill, RiLineChartFill, RiAddCircleFill } from 'react-icons/ri'
import { MdQuiz } from 'react-icons/md'

const Contacts = lazy(async () => await import('~/presentation/pages/contacts/contacts'))
const Analytics = lazy(async () => await import('~/presentation/pages/analytics/analytics'))

export type IRoute = {
  path: string
  element: React.LazyExoticComponent<React.ComponentType<any>> | ReactElement
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
    element: lazy(async () => await import('~/presentation/pages/quiz/quiz')),
    isPrivate: false,
    layout: 'NoLayout',
  },
]

export const menuRoutes = appRoutes.filter((item) => item.menuLink)
