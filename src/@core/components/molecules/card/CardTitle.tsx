import { Heading } from '@chakra-ui/react'

interface Props {
  text: string
}

export function CardTitle({ text }: Props) {
  return (
    <Heading m="5" as="h4" size="md">
      {text}
    </Heading>
  )
}
