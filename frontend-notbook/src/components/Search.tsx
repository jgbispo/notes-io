import {
  Container,
  Flex,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import NewNotes from "./NewNotes";
import { useState } from "react";


interface Props {
  func: Function
}

export function Search(props: Props) {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Flex flexDir='row' placeItems='center' gap={4}>
        <InputGroup size='md'>
          <Input
            placeholder='Search here...'
            borderRadius={25}
            value={search}
            onChange={({ target }) => { setSearch(target.value) }}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          />
          <InputRightElement children={<SearchIcon color='green.500' />} />
        </InputGroup>
        <NewNotes func={props.func} />
      </Flex>
    </Container>
  )
}
