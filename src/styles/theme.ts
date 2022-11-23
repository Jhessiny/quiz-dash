import { createMakeAndWithStyles } from 'tss-react'

function useTheme() {
  return {
    boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px;',
    colors: {
      white: '#fff',
      primaryColor: '#00CCD6',
      background: '#F0F7F4',
      text: '#212427',
    },
  }
}

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({ useTheme })
