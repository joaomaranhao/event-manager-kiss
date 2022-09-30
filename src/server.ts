import express from 'express'

const app = express()
app.use(express.json())

const port = 3333

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(port, () => console.log(`[server]: running on http://localhost:${port}`))
