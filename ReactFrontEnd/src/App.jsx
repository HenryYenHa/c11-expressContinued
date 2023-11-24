import { useState, useEffect } from 'react'
import Header from './Header.jsx'
import Messages from './Messages.jsx'
import Send from './SendMessages.jsx'
// import './App.css'

function App() {
  const [messages, setMessages] = useState([{userName: 'test', message:'test msg'}])
  const [name, setName] = useState("");
  const[msg,setMsg] = useState("");

    async function loadMessages(){
      const messages = await loadData();
      setMessages(messages)
    }
    useEffect(function(){
      loadMessages()
    },[])


  return (
    <div style={{backgroundColor: 'teal', height:'100vh', width:'100vw'}}> Howdy
    <Header refreshMessages={loadMessages} name = {name} setName = {setName}/>
    <Messages msg={messages}/>    {/* This is how we send a message */}

    <Send msg={msg} setMsg={setMsg}/>
    </div>
  )
}

export default App
