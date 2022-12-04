import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  card: {
    background: theme.colors.white,
    borderRadius: '.5rem',
    padding: '2rem',
    boxShadow: theme.boxShadow,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
}))
