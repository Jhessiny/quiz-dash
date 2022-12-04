import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    // flexWrap: 'wrap',
  },
}))
