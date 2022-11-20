import { ReactNode } from 'react'
import { NavigationBar } from './components'
import { useStyles } from './dashboard-layout-styles'

type Props = {
  children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <NavigationBar />
      <div>{children}</div>
    </div>
  )
}
