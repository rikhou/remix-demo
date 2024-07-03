import {ThemeOptions} from '@mui/material'
import baseThemeOptions from './base'
import grey from './colors/grey'
import {paletteNeutrals} from './shared'

const darkThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    ...baseThemeOptions.palette,
    text: {
      primary: paletteNeutrals.white,
      secondary: paletteNeutrals.white,
    },
    payment: {
      ...baseThemeOptions?.palette?.payment,
      paymentDisableIconColor: grey[50],
    },

    footer: {
      bg: '#343434',
      bg1: '#343434',
    },
    facility: {
      infoBackground: '#343434',
      businessesInfoBackground: '#343434',
    },
  },
}

export default darkThemeOptions
