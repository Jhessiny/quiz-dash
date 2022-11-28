import React from 'react'
import { useStyles } from './success-message-style'

export const SuccessMessage = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.success}>
      <p>Info sent successfully</p>
      <img src='/assets/success.png' />
    </div>
  )
}
