import React, {forwardRef} from 'react'
import {SvgIcon, SvgIconProps} from '@mui/material'

import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

interface Props extends SvgIconProps {
  icon: IconDefinition
}

const FontAwesomeSvgIcon = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const {icon, ...svgIconProps} = props

  const {
    icon: [width, height, , , svgPathData],
  } = icon

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`} {...svgIconProps}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        svgPathData.map((d, i) => <path key={d} style={{opacity: i === 0 ? 0.4 : 1}} d={d} />)
      )}
    </SvgIcon>
  )
})

export default FontAwesomeSvgIcon
