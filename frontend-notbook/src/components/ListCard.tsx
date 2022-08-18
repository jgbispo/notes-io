import { StackDivider, VStack } from "@chakra-ui/react"
import Card from "./Card"

interface Card {
  id: number,
  title: string,
  subject: string,
  content: string
}

interface Props {
  func: Function,
  notes: Card[],
  currentNote: Function
}

export function ListCard(props: Props) {
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
        props.notes.map((note, index) => {
          return (
            <Card
              key={index}
              id={note.id}
              title={note.title}
              subject={note.subject}
              content={note.content}
              onClick={props.func}
              currentNote={props.currentNote}
            />
          )
        })
      }
    </VStack>

  )
}
