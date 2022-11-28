import { makeStyles } from '~/presentation/theme/theme'

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
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem 3rem',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#06bfc8',
    },
  },
  active: {
    background: '#06bfc8',
  },
  iconWrapper: {
    fontSize: '2rem',
    marginRight: '.5rem',
    display: 'inline-flex',
  },
}))
