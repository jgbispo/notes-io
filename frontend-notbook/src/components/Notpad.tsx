import { Box, Button, Center, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useState } from "react"

interface Card {
  title: string,
  subject: string,
  content: string,
  id: number
}

interface Note {
  note: Card,
  save: Function
}

export default function Notepad(props: Note) {

  const note = props.note

  const [content, setContent] = useState<string>(note?.content)
  const [title, setTitle] = useState<string>(note?.title)

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleInputChange = (e: any) => {
    setContent(e.target.value)
  }


  const NotFoundNot = () => {
    return (
      <Box flex='3' height={940} my={4} mx={2} borderRadius={50} borderWidth={2} borderColor="#A5C9CA" p={8} bg='transparent' color='black' >
        <Center>
          <Heading>Not found Note</Heading>
        </Center>
      </Box>
    )
  }

  const BoxNote = () => {
    return (
      <Box flex='3' height={940} my={4} mx={2} borderRadius={50} borderWidth={2} borderColor="#A5C9CA" p={8} bg='transparent' color='black' >
        <VStack spacing={4} alignItems='left'>
          <Input
            value={title}
            size='lg'
            border='none'
            fontWeight='bold'
            fontSize='32px'
            onChange={handleTitleChange}
          />
          <Textarea
            height={720}
            resize='none'
            border='none'
            value={content}
            onChange={handleInputChange}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          />
          <Button
            onClick={() => { props.save(note.id, title, content) }}
            colorScheme='whatsapp'
            leftIcon={<CheckIcon />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Save
          </Button>
        </VStack>
      </Box>
    )
  }

  const isNote = note.id !== 0 || note == undefined

  return (
    <>
      {isNote
        ? <BoxNote />
        : <NotFoundNot />
      }
    </>
  )
}
