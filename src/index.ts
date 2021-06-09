import express from 'express'

const PORT = '3000'
const app = express()

app.get('/', (req, res) => {
  res.send('HEYY').end()
})

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
})
