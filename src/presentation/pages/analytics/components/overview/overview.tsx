import { OverviewCard } from '../overview-card/overview-card'
import { FaUsers } from 'react-icons/fa'
import { MdQuiz } from 'react-icons/md'
import { useStyles } from './overview-styles'
import { Card } from '~/presentation/components'

export const Overview = () => {
  const { classes } = useStyles()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <OverviewCard
        icon={<FaUsers />}
        label='contacts'
        counter={1200}
        variation={{ sign: '+', value: 15 }}
      />
      <OverviewCard icon={<MdQuiz />} label='quizzes' counter={8} />
      <Card className={classes.tags} cardTitle='Most popular tags'>
        <ul>
          <li>retired</li>
          <li>income &gt; 5k</li>
          <li>credit card</li>
        </ul>
      </Card>
    </div>
  )
}
