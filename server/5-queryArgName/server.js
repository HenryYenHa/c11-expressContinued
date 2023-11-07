import express from 'express'
import cors from 'cors'
import {getMessages, addMessage} from './data.js'

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/messages', (req,res)=>{
    const someMessages  = getMessages()
    res.json(someMessages)
})

app.post('/messages', (req,res) => {
    addMessage({...req.body, userName: req.query.userName})
    res.json('ok')
})

app.listen(port, ()=>{
    console.log('server up on port', port)
})
