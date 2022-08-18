import {
  Container,
  Flex,
} from '@chakra-ui/react'
import { Search } from './Search'
import { HeaderNavBar } from './HeaderNavBar'
import { ListCard } from './ListCard'

interface BarProps {
  name: string,
  username: string,
  url: string
  saveItem: Function,
  removeItem: Function,
  currentNote: Function,
  notes: Card[]
}

interface Card {
  id: number,
  title: string,
  subject: string,
  content: string
}

export default function NavBar(props: BarProps) {

  return (
    <Container flex={1} color="black" bg="transparent" height={940} my={4} mx={2} borderRadius={50} borderWidth={2} borderColor="#A5C9CA">
      <Flex flexDir='column'>
        <HeaderNavBar username={props.username} url={props.url} name={props.name} />
        <Search func={props.saveItem} />
        <ListCard
          notes={props.notes}
          func={props.removeItem}
          currentNote={props.currentNote}
        />
      </Flex>
    </Container >
  )
}
