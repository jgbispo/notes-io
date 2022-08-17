import { StackDivider, VStack } from "@chakra-ui/react"
import Card from "./Card"

var notes = [
  { id: 1, title: 'title 01', content: 'Nothing' },
  { id: 2, title: 'title 02', content: 'Nothing' },
  { id: 3, title: 'title 03', content: 'Nothing' },
  { id: 4, title: 'title 03', content: 'Nothing' },
  { id: 5, title: 'title 03', content: 'Nothing' },
  { id: 6, title: 'title 03', content: 'Nothing' },
  { id: 7, title: 'title 03', content: 'Nothing' },
  { id: 8, title: 'title 03', content: 'Nothing' },
  { id: 9, title: 'title 03', content: 'Nothing' },
  { id: 10, title: 'title 03', content: 'Nothing' },
  { id: 11, title: 'title 03', content: 'Nothing' },
  { id: 12, title: 'title 04', content: 'Nothing' }
]

export function ListCard() {
  return (
    <VStack divider={<StackDivider borderColor={'gray.200'} />}
      spacing={4}
      align='stretch'
      mt={5}
      overflowY='auto'
      overscrollBehaviorY='contain'
      maxHeight={650}
    >
      {
        notes.map(note => {
          return <Card key={note.id} title={note.title} content={note.content} id={note.id} />
        })
      }
    </VStack>

  )
}
