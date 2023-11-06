import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 3000

app.get('/messages', (req,res)=>{
    const someMessages  = [{message: 'a message'}, {message: 'another message'}]
    res.json(someMessages)
})

app.listen(port, ()=>{
    console.log('server up on port', port)
})
