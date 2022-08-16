import { Box, IconButton, Flex, Text, Container } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

interface Card {
  title: string,
  content: string,
  id?: number
}

export default function Card(props: Card) {
  return (
    <Container>
      <Flex flexDir='row'>
        <Box flex={1} bg="green.200" borderLeftRadius={15} />
        <Box flex={9} p={2}>
          <Flex>
            <Box flex={1}>
              <Text fontSize='18px' fontFamily='roboto' fontWeight='bold'>{props.title}</Text>
              <Text fontSize='12px' fontWeight='light'>{props.content}</Text>
            </Box>
            <IconButton
              bg="red.300"
              height='80px'
              aria-label='Add to friends'
              icon={<DeleteIcon />}
              borderRightRadius={15}
              borderColor="blackAlpha.50"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            />
          </Flex>
        </Box>
      </Flex >
    </Container >
  )
}
