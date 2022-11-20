import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  nav: {
    background: theme.colors.primaryColor,
    minHeight: '100vh',
    color: theme.colors.white,
    paddingTop: '4rem',
  },
  item: {
    display: 'block',
    padding: '1.5rem 3rem',
  },
}))
