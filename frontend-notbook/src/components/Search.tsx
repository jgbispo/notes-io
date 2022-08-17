import { Container, Flex, InputGroup, Input, IconButton, InputRightElement } from "@chakra-ui/react";
import { EditIcon, SearchIcon } from '@chakra-ui/icons'

export function Search() {
  return (
    <Container>
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
    </Container>
  )
}
