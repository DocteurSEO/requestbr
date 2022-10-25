require('dotenv').config()
const express = require('express')
const {getAllNote,getUID,  getNote, addNote, updateNote, deleteNote} = require('./controllers/notes') 
const cors = require('cors')
const {isAdmin} = require('./middleware/isAdmin')
const helmet = require('helmet')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(helmet())

app.post('/api/v1', async (req, res) => {
    const data = await addNote(req.body)
  res.json(data) 
})


app.patch('/api/v1/:id',isAdmin ,async (req, res) => {
   
  

const data = await updateNote(req.params.id, req.body)
  res.json(data) 
})


app.delete('/api/v1/:id',isAdmin, async (req, res) => {
    const data = await deleteNote(req.params.id)
  res.json(data)
}) 

app.get('/api/v1/:id', async (req, res) => {
    const data = await getNote(req.params.id)
  res.json(data)
}) 

app.get('/api/v1/', async (req, res) => {
    const data = await getAllNote()
  res.json(data) 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})