import { ReactElement } from 'react'
import { Header, NavigationBar } from './components'
import { useStyles } from './dashboard-layout-styles'

type Props = {
  children: ReactElement
}

export const DashboardLayout = ({ children }: Props) => {
  const pageTitle = children.props.title
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <NavigationBar />
      <div className={classes.headerContentWrapper}>
        {pageTitle && <Header title={pageTitle} />}
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  )
}
