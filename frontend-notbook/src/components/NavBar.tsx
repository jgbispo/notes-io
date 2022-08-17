import {
  Container,
  Flex,
} from '@chakra-ui/react'
import { Search } from './Search'
import { HeaderNavBar } from './HeaderNavBar'
import { ListCard } from './ListCard'

interface User {
  name: string,
  username: string,
  url: string
}

export default function NavBar(props: User) {
  return (
    <Container flex={1} color="black" bg="transparent" height={940} my={4} mx={2} borderRadius={50} borderWidth={2} borderColor="#A5C9CA">
      <Flex flexDir='column'>
        <HeaderNavBar username={props.username} url={props.url} name={props.name} />
        <Search />
        <ListCard />
      </Flex>
    </Container >
  )
}
