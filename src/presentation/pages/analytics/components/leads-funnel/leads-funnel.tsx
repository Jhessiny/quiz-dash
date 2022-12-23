import { ResponsiveFunnel } from '@nivo/funnel'
import { Card } from '~/presentation/components'

const data = [
  {
    id: 'step_opened',
    value: 67737,
    label: 'Opened',
  },
  {
    id: 'step_started',
    value: 53365,
    label: 'Started',
  },
  {
    id: 'step_finished',
    value: 42959,
    label: 'Finished',
  },
  {
    id: 'step_sent',
    value: 35777,
    label: 'Sent contact info',
  },
]

const LeadsFunnel = () => {
  return (
    <Card cardTitle='Leads overview'>
      <div style={{ height: '250px', width: '400px' }}>
        <ResponsiveFunnel
          data={data}
          valueFormat='>-.4s'
          labelColor={{
            from: 'color',
            modifiers: [['darker', 3]],
          }}
          beforeSeparatorLength={100}
          afterSeparatorLength={100}
          shapeBlending={0}
          currentPartSizeExtension={10}
          motionConfig='wobbly'
        />
      </div>
    </Card>
  )
}
export default LeadsFunnel
