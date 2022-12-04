import { Suspense } from 'react'
import { Spinner } from '~/presentation/components'
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
          <LeadsFunnel />
          <PieChart />
        </div>
      </Suspense>
    </div>
  )
}
export default Analytics
