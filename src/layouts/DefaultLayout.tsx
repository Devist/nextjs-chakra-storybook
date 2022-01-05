import { Box, Container } from '@chakra-ui/react'
import { SampleHeader } from '@core/components'

function DefaultLayout({ children }) {
  return (
    <Box position="relative" w="100%" h="100vh">
      <div>네비게이션</div>
      <Container maxW="container.xl" paddingY="24">
        {children}
      </Container>
    </Box>
  )
}

export default DefaultLayout
