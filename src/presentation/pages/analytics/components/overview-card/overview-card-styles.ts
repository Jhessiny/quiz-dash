import { makeStyles } from '~/presentation/theme/theme'

type StyleProps = {
  negativeVariation: boolean
}

export const useStyles = makeStyles<StyleProps>()((theme, { negativeVariation }) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 3rem',
    borderRadius: '0.5rem',
    background: theme.colors.white,
    boxShadow: theme.boxShadow,
    marginBottom: '1.5rem',
  },
  iconWrapper: {
    fontSize: '3.5rem',
  },
  counterWrapper: {
    flex: 1,
    margin: '0 3rem',
  },
  label: { fontWeight: 'normal' },
  counter: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  variation: {
    color: negativeVariation ? theme.colors.error : theme.colors.success,
    fontWeight: 'bold',
  },
}))
