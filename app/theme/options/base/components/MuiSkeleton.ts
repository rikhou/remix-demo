import {ThemeOptions} from '@mui/material'

const styles: ThemeOptions['components'] = {
  MuiSkeleton: {
    defaultProps: {
      animation: 'wave',
    },
    styleOverrides: {
      root: {
        lineHeight: 1.5,
      },
    },
  },
}

export default styles
