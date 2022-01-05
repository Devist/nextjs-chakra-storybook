import { Box, Container } from '@chakra-ui/react'
import { SampleHeader } from '@core/components'

function DefaultLayout({ children }) {
  return (
    <Box position="relative" w="100%" h="100vh">
      <Box position="fixed" top={0} right={0} left={0} zIndex={1}>
        <SampleHeader />
      </Box>

      <Container maxW="container.xl" paddingY="24">
        {children}
      </Container>
    </Box>
  )
}

export default DefaultLayout
