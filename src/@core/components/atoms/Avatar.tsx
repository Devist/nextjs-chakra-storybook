import { Avatar as ChakraAvatar } from '@chakra-ui/react'

interface IProps {
  size: number
}

export function Avatar({ size }: IProps) {
  return <ChakraAvatar name="hello" src={`http://picsum.photos/${size}`} />
}

Avatar.defaultProps = {
  size: 50
}
