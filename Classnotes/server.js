import express from 'express'
import cors from 'cors'
import {getMessages, addAMessage} from './dataHandler.js'

const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.get("/messages", function(request, response) {
    const messages = getMessages()
    response.json(messages)
})

app.post("/messages", function(request, response){
    var newMessage = request.body
    addAMessage(newMessage)
    response.send('ok')
})

app.listen(port, function(request, result){
    console.log ('started server on ', port)
})