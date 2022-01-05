import { Box, Text } from '@chakra-ui/react'

function SectionTemplate() {
  return (
    <>
      <Box
        id="section1"
        minH="100vh"
        bg="grey"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Text color="black" fontSize="4xl">
          첫번째
        </Text>
      </Box>
      <Box
        id="section2"
        minH="100vh"
        bg="red.100"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Text color="black" fontSize="4xl">
          두번째
        </Text>
      </Box>
      <Box
        name="section3"
        id="section3"
        minH="100vh"
        bg="green.100"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Text color="black" fontSize="4xl">
          세번째
        </Text>
      </Box>
    </>
  )
}

export default SectionTemplate
