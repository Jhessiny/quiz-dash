import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  headerContentWrapper: {
    width: '100%',
    padding: '3rem 4rem',
  },
  content: {
    padding: '1.5rem 0',
  },
}))
