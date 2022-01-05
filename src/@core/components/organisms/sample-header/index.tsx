import { Box, Flex, Divider, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const SiteHeaderHeight = 80

export function SampleHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <>
      <Box h={`${SiteHeaderHeight}px`} bg="white">
        <Flex
          w="100%"
          h="100%"
          justify="space-between"
          alignItems="center"
          pr={{ base: 4, md: 10 }}
          pl={{ base: 4, md: 10 }}
          color="black">
          <Flex align="center" mr={2}>
            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}>
                로고
              </Text>
            </Link>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
            <HamburgerIcon />
          </Box>

          <Box>
            <Stack
              spacing={12}
              direction={{ base: 'column', md: 'row' }}
              display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              alignItems="center"
              flexGrow={1}
              mt={{ base: 4, md: 0 }}>
              <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
                <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}>
                  첫번째
                </Text>
              </Link>
              <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
                <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}>
                  두번째
                </Text>
              </Link>
              <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
                <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}>
                  세번째
                </Text>
              </Link>
            </Stack>
          </Box>
        </Flex>
        <Divider borderColor="black" />
      </Box>
    </>
  )
}
