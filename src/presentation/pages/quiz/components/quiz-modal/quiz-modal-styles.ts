import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  paper: {
    background: theme.colors.white,
    boxShadow: theme.boxShadow,
    maxWidth: '70rem',
    width: 'max-content',
    minWidth: '50rem',
    padding: '4rem',
    margin: '15rem auto',
    borderRadius: '.5rem',
    zIndex: 2,
  },
  title: { marginBottom: '.5rem', textTransform: 'uppercase' },
  divider: {
    width: '100%',
    height: '.5rem',
    borderRadius: '.5rem',
    margin: '2rem 0',
    display: 'flex',
    columnGap: '.5rem',
  },
  progress: {
    backgroundColor: alpha(theme.colors.text, '11'),
    borderRadius: '.5rem',
    flex: '1',
  },
  active: {
    backgroundColor: theme.colors.primaryColor,
  },
}))
