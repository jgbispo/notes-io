import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface User {
  name: string,
  username: string,
  url: string
}
export function HeaderNavBar(props: User) {
  return (
    <Box my={8} mx={4}>
      <Flex direction='row' placeItems='center' gap={2} justifyContent='center'>
        <Box
          borderColor='teal'
          borderWidth='3px'
          borderRadius='full'
          shadow='lg'
          padding='2px'
        >
          <Image
            borderRadius='full'
            boxSize='100px'
            src={props.url}
            alt={props.name}
          />
        </Box>
        <Flex direction='column'>
          <Text fontSize='25px' fontFamily='roboto' fontWeight='bold'>{props.name}</Text>
          <Text fontSize='16px' fontWeight='light'>{props.username}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
