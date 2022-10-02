import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import 'express-async-errors'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

const port = 3333

app.listen(port, () => console.log(`[server]: running on http://localhost:${port}`))
