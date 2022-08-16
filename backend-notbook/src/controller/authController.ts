import { PrismaClient } from '@prisma/client'
import { Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const db = new PrismaClient()

interface Login {
  username: string,
  password: string
}

interface Register {
  username: string,
  password: string,
  email: string,
  name: string
}

function generateToken(params = {}) {
  const secret = String(process.env.SECRET)
  return jwt.sign(params, secret, {
    expiresIn: 86400
  })
}


export async function Login(props: Login) {
  const user = await db.user.findUnique({
    where: {
      username: props.username,
    }
  })

  if (!user) {
    throw new Error('Not found user')
  }

  if (await bcrypt.compare(props.password, user.password)) {
    user.password = ''

    return {
      user,
      token: generateToken({ id: user.id }),
      auth: true
    }
  } else {
    throw new Error('Invalid password');
  }

}

export async function Register(props: Register) {
  const password = await bcrypt.hash(props.password, 10)

  await db.user.create({
    data: {
      name: props.name,
      username: props.username,
      email: props.email,
      password: password,
    },
  }).then(() => {
    return true
  }).catch(error => {
    throw new Error(error)
  })
}
