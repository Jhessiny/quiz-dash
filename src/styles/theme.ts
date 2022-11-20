import { createMakeAndWithStyles } from 'tss-react'

function useTheme() {
  return {
    white: '#fff',
    primaryColor: '#00CCD6',
  }
}

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({ useTheme })
