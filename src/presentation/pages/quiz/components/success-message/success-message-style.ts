import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  success: {
    padding: '2rem 0',
    textAlign: 'center',
    '& img': {
      width: '5rem',
      marginTop: '1.5rem',
    },
  },
}))
