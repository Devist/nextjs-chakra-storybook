import { Box } from '@chakra-ui/react'

function BlankLayout({ children }) {
  return (
    <Box position="relative" w="100%" h="100vh">
      <Box overflow="hidden" position="absolute" top={0} right={0} left={0} bottom={0}>
        {children}
      </Box>
    </Box>
  )
}

export default BlankLayout
