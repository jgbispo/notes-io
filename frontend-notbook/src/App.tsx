import { Flex, Box, Container, Text, Center } from '@chakra-ui/react'

import NavBar from './components/NavBar'

function App() {

  return (
    <Container maxW="1380px">
      <Flex color='white'>
        <NavBar
          url='https://github.com/jgbispo.png'
          username='Bishop'
          name='João Gustavo'
        />
        <Box flex='3' bg='tomato'>
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default App
