// theme.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import colors from './modules/colors'
import textStyles from './modules/textStyles'
import { breakpoints } from './modules/breakpoints'

import { Button } from '@core/components/atoms/Button'
import { Divider } from '@core/components/atoms/Divider'

// Global style overrides
// import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const overrides = {
  ...config,
  colors,
  fonts: {
    heading: 'Gilroy',
    body: 'Inter'
  },
  textStyles,
  breakpoints,
  components: {
    Button,
    Divider
  }
}

const theme = extendTheme(overrides)

export default theme
