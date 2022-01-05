import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@core/theme'
import Fonts from '@core/theme/modules/fonts'
import '@fontsource/inter/400.css'
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    // default: 'light'
  }
}

export const decorators = [
  (Story) => (
    <>
      <ChakraProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Fonts />
        <div>
          <Story />
        </div>
      </ChakraProvider>
    </>
  )
]
