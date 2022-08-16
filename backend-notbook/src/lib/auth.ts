import { Response, Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const parts = authHeader.split(' ')

  if (parts.length !== 2) {
    return res.status(401).send({ error: 'Token error' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' })
  }

  const secret = String(process.env.SECRET)

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid', err })

    req.query.userId = decoded.id
    return next()
  })
}
