import express from 'express'

const app = express()
const port = 3000

app.get('/messages', (req,res)=>{
    const someMessages  = [{message: 'a message'}, {message: 'another message'}]
    res.json(someMessages)
})

app.listen(port, ()=>{
    console.log('server up on port', port)
})
