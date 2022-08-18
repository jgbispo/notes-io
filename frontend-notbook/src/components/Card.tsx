import { Box, IconButton, Flex, Text, Heading } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

interface Card {
  title: string,
  subject: string,
  content?: string,
  onClick: Function,
  currentNote: Function,
  id?: number
}

export default function Card(props: Card) {
  return (
    <Box
      p={5}
      cursor='pointer'
      shadow='md'
      m={2}
      borderWidth='4px'
      borderRadius={25}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
    >
      <Flex justifyContent='space-between' placeItems='center'>
        <Box onClick={() => { props.currentNote(props.id) }}>
          <Heading fontSize='xl'>{props.title}</Heading>
          <Text mt={4}>{props.subject}</Text>
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
            onClick={() => { props.onClick(props.id) }}
            shadow='md'
          />
        </Box>
      </Flex>
    </Box >
  )
}
