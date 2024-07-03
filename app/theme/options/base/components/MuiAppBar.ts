import {ThemeOptions} from '@mui/material'
import grey from 'theme/options/colors/grey'
import {paletteNeutrals} from '../../shared'

const styles: ThemeOptions['components'] = {
  MuiAppBar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: grey[900],
        color: paletteNeutrals.white,
      },
    },
  },
}

export default styles
