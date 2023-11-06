import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/messages', (req,res)=>{
    const someMessages  = [{message: 'a message'}, {message: 'another message'}]
    res.json(someMessages)
})

app.post('/messages', (req,res) => {
    console.log('got a message', req.body)
    res.json('ok')
})

app.listen(port, ()=>{
    console.log('server up on port', port)
})
