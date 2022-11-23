import React, { InputHTMLAttributes } from 'react'
import { useStyles } from './text-field-styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string
  focus?: boolean
}

export const TextField = React.forwardRef(
  ({ helperText, focus = false, ...props }: Props, ref: React.Ref<HTMLInputElement>) => {
    const { classes } = useStyles()
    return (
      <div className={classes.inputWrapper}>
        <input {...props} ref={ref} />
        <span className={classes.errorMessage}>{helperText}</span>
      </div>
    )
  },
)

TextField.displayName = 'TextField'
