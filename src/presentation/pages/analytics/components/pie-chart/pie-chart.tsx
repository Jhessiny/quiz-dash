import { ResponsivePie } from '@nivo/pie'
import { Card } from '~/presentation/components'

const data = [
  {
    id: 'rust',
    label: 'rust',
    value: 542,
    color: 'hsl(6, 70%, 50%)',
  },
  {
    id: 'c',
    label: 'c',
    value: 443,
    color: 'hsl(192, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 233,
    color: 'hsl(257, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 387,
    color: 'hsl(53, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 593,
    color: 'hsl(307, 70%, 50%)',
  },
]
export const PieChart = () => (
  <Card cardTitle='Tags overview'>
    <div style={{ height: '250px', width: '400px' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor='#333333'
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </div>
  </Card>
)
