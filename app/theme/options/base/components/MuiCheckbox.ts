import {ThemeOptions} from '@mui/material'

const checkboxSize = {
  small: {fontSize: '1.34rem'},
  medium: {fontSize: '2rem'},
}

const styles: ThemeOptions['components'] = {
  MuiCheckbox: {
    styleOverrides: {
      root: ({ownerState, theme}) => {
        const {size, color} = ownerState
        return {
          color: theme.palette.grey[600],
          '&.Mui-checked': {
            color: color === 'primary' && theme.palette.interactive.light,
          },
          '& .MuiSvgIcon-root': {
            ...(size && checkboxSize[size]),
          },
        }
      },
    },
  },
}

export default styles
