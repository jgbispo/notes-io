import express from 'express'
import { Login, Register } from './controller/authController'
import { DeleteNote, GetNotes, NewNote, UpdateNote } from './controller/notesController'
import { auth } from './lib/auth'

const router = express.Router()

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await Login({ username, password })
    res.status(200).send({ user: user.user, token: user.token })
  } catch (error) {
    res.status(401).send({ error: error.message })
  }
})

router.post("/register", async (req, res) => {
  try {
    const { name, username, email, password } = req.body
    await Register({ name, email, username, password })

    return res.status(201).send()
  } catch (error) {
    res.status(401).send({ error: error.message })
  }
})

router.use(auth)

// Notes
router.get("/note", async (req, res) => {
  try {
    const id = String(req.query.userId)
    const note = await GetNotes({ id: parseInt(id) })

    return res.send({ note: note?.notes })
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.post("/note", async (req, res) => {
  try {
    const { title, content } = req.body
    const userId = String(req.query.userId)
    await NewNote({ title, content, userId: parseInt(userId) })

    return res.status(201).send()
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }

})

router.put("/note", async (req, res) => {
  try {
    const id = String(req.query.noteId)
    const userId = String(req.query.userId)

    const { title, content } = req.body

    await UpdateNote({ id: parseInt(id) }, { title, content, userId: parseInt(userId) })
    return res.status(200).send({ router: "Update Note" })
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.delete("/note", async (req, res) => {
  try {
    const id = String(req.query.noteId)
    await DeleteNote({ id: parseInt(id) })
    return res.status(204).send()
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

export default router
