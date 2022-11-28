import { useStyles } from './header-styles'

export type HeaderProps = {
  title: string
}
export const Header = ({ title }: HeaderProps) => {
  const { classes } = useStyles()
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.divider}></div>
    </div>
  )
}
