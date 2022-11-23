import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '&:not(:last-child)': {
      marginBottom: '2.6rem',
    },
    '& input': {
      padding: '1.2rem 1rem',
      borderRadius: '.5rem',
      border: '1px solid #ccc',
      '&:focus-visible': {
        outline: `solid ${alpha(theme.colors.primaryColor, '99')}`,
      },
    },
  },
  errorMessage: {
    color: theme.colors.error,
    fontSize: '1.4rem',
    marginLeft: '0.5rem',
    position: 'absolute',
    bottom: '-1.8rem',
  },
}))
