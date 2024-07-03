import type {ThemeOptions} from '@mui/material'

import MuiAppBar from './MuiAppBar'
import MuiChip from './MuiChip'
import MuiSwitch from './MuiSwitch'
import MuiCheckbox from './MuiCheckbox'
import MuiSkeleton from './MuiSkeleton'

const components: ThemeOptions['components'] = {
  ...MuiAppBar,
  ...MuiChip,
  ...MuiSwitch,
  ...MuiCheckbox,
  ...MuiSkeleton,
}

export default components
