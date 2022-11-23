import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  root: {
    background: alpha(theme.colors.primaryColor, '66'),
    minHeight: '100vh',
    padding: '1rem',
    color: theme.colors.text,
    zIndex: 1,
  },
}))
