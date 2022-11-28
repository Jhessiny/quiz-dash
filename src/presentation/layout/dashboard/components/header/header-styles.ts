import { makeStyles } from '~/presentation/theme/theme'
import { alpha } from '~/styles/helpers'

export const useStyles = makeStyles()((theme) => ({
  title: {
    fontSize: '3rem',
    color: theme.colors.primaryColor,
    padding: '2rem 0rem',
  },
  divider: {
    height: '2px',
    backgroundColor: alpha(theme.colors.text, '15'),
  },
}))
