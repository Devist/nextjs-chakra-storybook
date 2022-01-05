import classNames from 'classnames'
import { Box, BoxProps, useColorMode } from '@chakra-ui/react'

interface Props extends BoxProps {
  children?: React.ReactNode
  className?: string
  isShadow?: boolean
}

export function Card({ children, className, isShadow, ...res }: Props) {
  const classes = classNames(
    'card',
    'p-1',
    'rounded-xl',
    'overflow-hidden',
    'border-dark',
    className
  )

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={isShadow ? '2xl' : 'none'}
        className={classes}
        {...res}>
        {children}
      </Box>
    </>
  )
}

Card.defaultProps = {
  isShadow: true
}
