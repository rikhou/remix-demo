import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {SvgIconProps} from '@mui/material'
import FontAwesomeSvgIcon from './FontAwesomeSvgIcon'

function faToSvgIcon(icon: IconDefinition) {
  return (svgIconProps: SvgIconProps) => <FontAwesomeSvgIcon icon={icon} {...svgIconProps} />
}

export default faToSvgIcon
