import { Box, IconButton, Flex, Text, Heading } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

interface Card {
  title: string,
  content: string,
  id?: number
}

export default function Card(props: Card) {
  return (
    <Box p={5} cursor='pointer' shadow='md' m={2} borderWidth='1px' borderRadius={25}>
      <Flex justifyContent='space-between' placeItems='center'>
        <Box onClick={() => { console.log(props.title) }}>
          <Heading fontSize='xl'>{props.title}</Heading>
          <Text mt={4}>{props.content}</Text>
        </Box>
        <Box>
          <IconButton
            aria-label='Delete'
            variant='outline'
            colorScheme='red'
            icon={<DeleteIcon />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() => { console.log("Delete") }}
            shadow='md'
          />
        </Box>
      </Flex>
    </Box >
  )
}
