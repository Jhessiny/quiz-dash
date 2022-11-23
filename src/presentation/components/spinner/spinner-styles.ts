import { makeStyles } from '~/styles/theme'

export const useStyles = makeStyles<{ scale: string }>()((theme, { scale }) => ({
  spinnerWrapper: { width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0' },
  ldsRing: {
    transform: scale,
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px',
    '& div': {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: '64px',
      height: '64px',
      margin: '8px',
      border: `8px solid ${theme.colors.primaryColor}`,
      borderRadius: '50%',
      animation: 'ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      borderColor: ` ${theme.colors.primaryColor} transparent transparent transparent`,
    },
    ' div:nth-child(1) ': {
      animationDelay: '-0.45s',
    },
    ' div:nth-child(2) ': {
      animationDelay: '-0.3s',
    },
    ' div:nth-child(3) ': {
      animationDelay: '-0.15s',
    },
    '@keyframes ldsRing': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      ' 100% ': {
        transform: 'rotate(360deg)',
      },
    },
  },
}))
