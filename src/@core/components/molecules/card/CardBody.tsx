import { Text } from '@chakra-ui/react'

interface Props {
  children?: React.ReactChild
}

export function CardBody({ children }: Props) {
  return <Text m="5">{children}</Text>
}
