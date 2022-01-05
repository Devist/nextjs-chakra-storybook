import type { AppProps as NextAppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import '@core/styles/globals.css'
import theme from '@core/theme'
import Fonts from '@core/theme/modules/fonts'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@core/styles/skeleton.css'

import { LAYOUT_TYPE } from '@/@types/LayoutType'
import DefaultLayout from '@/layouts/DefaultLayout'
import BlankLayout from '@/layouts/BlankLayout'
import SampleLayout from '@/layouts/SampleLayout'

const layouts = {
  [LAYOUT_TYPE.DEFAULT]: DefaultLayout,
  [LAYOUT_TYPE.BLANK]: BlankLayout,
  [LAYOUT_TYPE.SAMPLE]: SampleLayout
}

type AppProps<P = any> = {
  Component: P
} & Omit<NextAppProps<P>, 'Component'>

function App({ Component, pageProps }: AppProps) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>)

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Fonts />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
