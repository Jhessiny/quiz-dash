import { DashboardLayout, NoLayout } from '~/presentation/layout'

export const LayoutConfig = {
  DashboardLayout: {
    name: 'DashboardLayout',
    component: DashboardLayout,
  },
  NoLayout: {
    name: 'NoLayout',
    component: NoLayout,
  },
} as const
