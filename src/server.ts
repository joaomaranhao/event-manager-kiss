import express from 'express'
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use('/api', routes)

const port = 3333

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(port, () => console.log(`[server]: running on http://localhost:${port}`))
