import { makeStyles, mediaQuery } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  top: {
    display: 'grid',
    justifyContent: 'space-between',
    gap: '1rem',
    gridTemplateColumns: 'repeat(6, 1fr)',
    '& div': {},
    [mediaQuery.down(1500)]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}))
