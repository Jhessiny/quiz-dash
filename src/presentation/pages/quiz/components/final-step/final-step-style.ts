import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  button: {
    backgroundColor: alpha(theme.colors.text, '99'),
    border: 'none',
    borderRadius: '.3rem',
    color: theme.colors.white,
    padding: '1rem 4rem',
    marginTop: '2rem',
  },
  title: { marginBottom: '3rem', textTransform: 'uppercase' },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
