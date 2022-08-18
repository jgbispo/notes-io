import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  FormControl,
  Input,
  VStack,
  HStack,
  Button,
  PopoverHeader,
  useDisclosure,
} from '@chakra-ui/react'

import { useState } from 'react';

interface Props {
  func: Function
}

export default function(props: Props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <Popover>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>New Note</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <VStack spacing={5}>
            <FormControl>
              <Input
                name='title'
                placeholder='Title'
                value={title}
                onChange={({ target }) => { return setTitle(target.value) }}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                name='subject'
                placeholder='Subject'
                value={subject}
                onChange={({ target }) => { return setSubject(target.value) }}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              />
            </FormControl>
            <HStack>
              <Button
                onClick={() => {
                  if (title != '' && subject != '') {
                    props.func(title, subject)
                    setTitle('')
                    setSubject('')
                  }else{
                    alert("Verifique os dados")
                  }
                }}
                colorScheme='whatsapp'
                leftIcon={<CheckIcon />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Save
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}


