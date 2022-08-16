import { Box, Input, InputGroup, InputRightElement, Container, Text, Flex, Image, ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { SearchIcon, EditIcon } from '@chakra-ui/icons'
import Card from './Card'

interface User {
  name: string,
  username: string,
  url: string
}

var notes = [
  { id: 1, title: 'title 01', content: 'Nothing' },
  { id: 2, title: 'title 02', content: 'Nothing' },
  { id: 3, title: 'title 03', content: 'Nothing' },
  { id: 4, title: 'title 04', content: 'Nothing' }
]


export default function NavBar(props: User) {
  return (
    <Container flex={1} color="black" bg="transparent" height={940} my={4} mx={2} borderRadius={50} borderWidth={2} borderColor="#A5C9CA">
      <Flex flexDir='column'>
        <Box my={8} mx={4}>
          <Flex direction='row' placeItems='center' gap={2} justifyContent='center'>
            <Image
              borderRadius='full'
              boxSize='120px'
              src={props.url}
              alt={props.name}
            />
            <Flex direction='column' >
              <Text fontSize='25px' fontFamily='roboto' fontWeight='bold'>{props.name}</Text>
              <Text fontSize='16px' fontWeight='light'>{props.username}</Text>
            </Flex>
          </Flex>
        </Box>
        <Flex flexDir='row' placeItems='center' gap={4}>
          <InputGroup size='md'>
            <Input
              placeholder='Search here...'
              borderRadius={25}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            />
            <InputRightElement children={<SearchIcon color='green.500' />} />
          </InputGroup>
          <IconButton
            bg="transparent"
            aria-label='Add to friends'
            icon={<EditIcon />}
            borderRadius={50}
            borderWidth={2}
            borderColor="blackAlpha.50"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          />
        </Flex>
        <Box mt={10}>
          {notes.map(note => {
            return <Box m={2}><Card key={note.id} title={note.title} content={note.content} id={note.id} /></Box>
          })}
        </Box>
      </Flex>
    </Container >
  )
}
