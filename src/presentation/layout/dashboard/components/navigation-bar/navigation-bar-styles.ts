import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  nav: {
    background: theme.colors.primaryColor,
    minHeight: '100vh',
    color: theme.colors.white,
    paddingTop: '4rem',
  },
  title: {
    fontSize: '2rem',
    padding: '1.5rem 3rem',
  },
  item: {
    display: 'block',
    padding: '1.5rem 3rem',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
  },
}))
