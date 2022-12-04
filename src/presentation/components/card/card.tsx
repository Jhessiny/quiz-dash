import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { useStyles } from './card-styles'

type Props = HTMLAttributes<HTMLElement> & { cardTitle?: string }

export const Card = ({ children, cardTitle, className, ...rest }: Props) => {
  const { classes } = useStyles()
  return (
    <div className={clsx(classes.card, className)} {...rest}>
      {cardTitle && <h3 className={classes.title}>{cardTitle}</h3>}
      {children}
    </div>
  )
}
