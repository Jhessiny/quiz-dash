import { useStyles } from './spinner-styles'

export const Spinner = ({ scale = 1 }: { scale?: number }) => {
  const { classes } = useStyles({ scale: scale ? `scale(${scale})` : 'scale(1)' })
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
