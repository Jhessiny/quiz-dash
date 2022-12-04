import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: theme.colors.background,
  },
  headerContentWrapper: {
    width: 'calc(100% - 21rem)',
    maxWidth: '1500px',
    margin: '0 auto',
    padding: '3rem 4rem',
  },
  content: {
    padding: '1.5rem 0',
  },
}))
