import { ReactElement } from 'react'
import { useStyles } from './overview-card-styles'

type Props = {
  icon: ReactElement
  label: string
  counter: number
  variation?: {
    value: number
    sign: '+' | '-'
  }
}

export const OverviewCard = ({ icon, label, counter, variation }: Props) => {
  const { classes } = useStyles({ negativeVariation: variation?.sign === '-' })
  return (
    <div className={classes.card}>
      <span className={classes.iconWrapper}>{icon}</span>
      <div className={classes.counterWrapper}>
        <h6 className={classes.label}>{label}</h6>
        <span className={classes.counter}>{counter}</span>
      </div>
      {variation && (
        <span className={classes.variation}>
          {variation.sign}
          {variation.value}%
        </span>
      )}
    </div>
  )
}
