import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles()((theme) => ({
  question: { marginTop: '3.5rem' },
  inputWrapper: {
    padding: '1.5rem',
    color: theme.colors.text,
    margin: '1rem 0',
    borderRadius: '5rem',
    transform: 'translateX(-1rem)',
    '&:hover, &.selected': {
      background: alpha(theme.colors.text, '11'),
      cursor: 'pointer',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
}))
