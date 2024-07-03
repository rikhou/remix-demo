import {ThemeOptions} from '@mui/material'

function combineThemeOptions(
  baseThemeOptions: ThemeOptions,
  brandThemeOptions: ThemeOptions = {palette: {}},
  isDarkMode = false
): ThemeOptions {
  return {
    ...baseThemeOptions,
    ...brandThemeOptions,
    palette: {
      ...baseThemeOptions.palette,
      ...brandThemeOptions.palette,
      mode: isDarkMode ? 'dark' : 'light', // TODO: move to redux state
    },
  }
}

export default combineThemeOptions
