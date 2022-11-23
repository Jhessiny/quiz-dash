import { alpha } from '~/styles/helpers'
import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
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
  hidden: {
    display: 'none',
    position: 'relative',
    '&:checked + span::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      backgroundColor: theme.colors.primaryColor,
      borderRadius: '50%',
    },
  },
  radio: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    border: '2px solid #ddd',
    borderRadius: '50%',
    marginRight: '1rem',
  },
}))
