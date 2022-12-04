import { makeStyles } from '~/presentation/theme/theme'

export const useStyles = makeStyles()((theme) => ({
  tags: {
    background: theme.colors.white,
    padding: '1.5rem',
    borderRadius: '0.5rem',
    width: '40rem',
    '& ul': {
      display: 'flex',
      gap: '.8rem',
      alignItems: 'center',
    },
    '& li': {
      background: theme.colors.background,
      padding: '.8rem',
      listStyle: 'none',
    },
  },
  title: {
    marginBottom: '1.5rem',
  },
}))
