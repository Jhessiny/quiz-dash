import { createMakeAndWithStyles } from 'tss-react'

function useTheme() {
  return {
    boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px;',
    colors: {
      white: '#fff',
      primaryColor: '#00CCD6',
      background: '#F0F7F4',
      text: '#212427',
      error: '#FF5349',
      success: '#32CD32',
    },
  }
}

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({ useTheme })

export const mediaQuery = {
  up(breakpoint: number) {
    return `@media only screen and (min-width: ${breakpoint}px)`
  },
  down(breakpoint: number) {
    return `@media only screen and (max-width: ${breakpoint}px)`
  },
}
