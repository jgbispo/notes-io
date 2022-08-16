import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

interface Note {
  title: string,
  content: string,
  userId: number,
}

interface Id {
  id: number
}

export async function NewNote(props: Note) {
  await db.note.create({
    data: {
      title: props.title,
      content: props.content,
      userId: props.userId
    }
  }).then(() => {
    return true
  }).catch(error => {
    throw new Error(error)
  })
}

export async function GetNotes(userId: Id) {
  const note = await db.user.findUnique({
    where: {
      id: userId.id
    },
    include: {
      notes: true,
    }
  }).catch(error => {
    throw new Error(error)
  })

  console.log(note)
  return note
}

export async function UpdateNote(noteId: Id, note: Note) {
  await db.note.update({
    where: {
      id: noteId.id
    },
    data: note
  }).then(() => {
    return true
  }).catch(error => {
    throw new Error(error)
  })
}

export async function DeleteNote(noteId: Id) {
  await db.note.delete({
    where: { id: noteId.id }
  }).then(() => {
    return true
  }).catch(error => {
    throw new Error(error)
  })
}
