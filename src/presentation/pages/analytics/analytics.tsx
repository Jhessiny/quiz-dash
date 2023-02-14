import { Suspense } from 'react'
import { Card, Spinner } from '~/presentation/components'
import { HeaderProps } from '~/presentation/layout/dashboard/components'
import { useStyles } from './analytics-styles'
import { PieChart } from './components'
import LeadsFunnel from './components/leads-funnel/leads-funnel'
import { Overview } from './components/overview/overview'

type Props = HeaderProps

const Analytics = (props: Props) => {
  const { classes } = useStyles()
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <div className={classes.top}>
          <Overview />
          <div className={classes.topChart}>
            <LeadsFunnel />
          </div>
          <div className={classes.topChart}>
            <PieChart />
          </div>
        </div>
        <Card />
        <Card />
      </Suspense>
    </div>
  )
}
export default Analytics
