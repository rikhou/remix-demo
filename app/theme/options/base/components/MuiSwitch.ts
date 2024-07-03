import {ThemeOptions} from '@mui/material'

const switchBaseStyles = {
  small: {padding: '0.25rem 0.5rem 0.5rem 0.25rem', left: '-0.25rem', top: '-0.25rem'},
  medium: {padding: '0.375rem 0.6rem 0.6rem 0.375rem', left: '-0.375rem', top: '-0.375rem'},
}

const styles: ThemeOptions['components'] = {
  MuiSwitch: {
    styleOverrides: {
      root: ({ownerState, theme}) => {
        const {size, color} = ownerState
        const thumbPositionStyleWhenChecked = {
          small: {transform: 'translateX(1.9375rem)'},
          medium: {transform: 'translateX(1.5rem)'},
        }
        return {
          padding: 0,
          overflow: 'visible',
          '& .MuiSwitch-switchBase': {
            ...(size && switchBaseStyles[size]),
            '&.Mui-checked': {
              color: theme.palette.common.white,
              ...(size && thumbPositionStyleWhenChecked[size]),
              '& + .MuiSwitch-track': {
                backgroundColor: color === 'primary' && theme.palette.interactive.light,
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {borderColor: theme.palette.interactive.main},
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3,
            },
          },
        }
      },
      sizeSmall: {
        width: '3.5rem',
        height: '1.5625rem',
        '& .MuiSwitch-thumb': {width: '1.3125rem', height: '1.3125rem'},
      },
      sizeMedium: {
        width: '3.5rem',
        height: '2rem',
        '& .MuiSwitch-thumb': {width: '1.75rem', height: '1.75rem'},
      },
      thumb: ({theme}) => ({
        boxSizing: 'border-box',
        transform: 'translate(0.125rem, 0.125rem)',
        border: '1px solid',
        borderColor: theme.palette.grey[400],
      }),
      track: ({theme}) => ({
        border: '1px solid',
        borderColor: theme.palette.grey[600],
        borderRadius: '6.25rem',
        backgroundColor: theme.palette.grey[200],
        opacity: 1,
      }),
    },
  },
}

export default styles
