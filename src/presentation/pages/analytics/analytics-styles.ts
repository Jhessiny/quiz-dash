import { makeStyles, mediaQuery } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  top: {
    display: 'grid',
    width: '100%',
    justifyContent: 'space-between',
    gap: '1rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'minmax(50px, auto) 1fr',
    [mediaQuery.down(1500)]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [mediaQuery.down(900)]: {
      gridTemplateColumns: '1fr',
    },
  },
  topChart: {
    gridColumn: 'span 2',
    gridRow: '1fr',
  },
}))
