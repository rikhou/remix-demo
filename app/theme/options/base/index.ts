import {ThemeOptions} from '@mui/material'

import componentsOptions from './components'
import typographyVariantsOptions from './typography'
import paletteOptions from './palette'

const baseThemeOptions: ThemeOptions = {
  typography: typographyVariantsOptions,
  palette: paletteOptions,
  components: componentsOptions,
}

export default baseThemeOptions
