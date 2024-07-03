import {ThemeOptions} from '@mui/material'

const styles: ThemeOptions['components'] = {
  MuiChip: {
    styleOverrides: {
      sizeMedium: {
        fontSize: '0.875rem',
        height: '1.875rem',
      },
      sizeSmall: {
        fontSize: '0.75rem',
        height: '1.4375rem',
      },
      outlined: ({theme}) => ({
        color: theme.palette.grey[800],
        borderColor: theme.palette.grey[800],
      }),
      clickable: ({theme}) => ({
        '&:hover': {
          color: theme.palette.grey[900],
          borderColor: theme.palette.common.black,
        },
      }),
      deleteIconMedium: {
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      deleteIconSmall: {
        fontSize: '0.65rem',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      root: ({theme}) => ({
        '&.MuiChip-deletable.MuiChip-sizeSmall': {
          height: '1.5625rem',
        },
        '&.MuiChip-deletableColorDefault': {
          color: theme.palette.grey[700],
        },
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.26)',
          backgroundColor: theme.palette.grey[300],
          borderColor: 'rgba(151, 151, 151, 0)',
          opacity: 1,
        },
      }),
    },
  },
}

export default styles
