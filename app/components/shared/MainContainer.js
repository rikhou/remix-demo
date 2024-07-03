import React from 'react'
import {Container} from '@mui/material'

/**
 * @typedef {import('@mui/material').ContainerProps} ContainerProps
 * @typedef {ContainerProps} Props
 */

/**
 * MainContainer Component
 *
 * Demos from material-ui:
 * - [Container](https://material-ui.com/components/container/)
 *
 * API reference from material-ui:
 * - [Container API](https://material-ui.com/components/container/#api)
 * @type {React.FC<Props>}
 */

const MainContainer = (props) => <Container disableGutters maxWidth='xl' {...props} />

export default MainContainer
