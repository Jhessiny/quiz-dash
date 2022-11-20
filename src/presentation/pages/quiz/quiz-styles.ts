import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.colors.background,
    minHeight: '100vh',
  },
  paper: {
    background: theme.colors.white,
    boxShadow: theme.boxShadow,
    width: 'fit-content',
    padding: '2rem 4rem',
    margin: 'auto',
  },
}))
