import { useState, useEffect } from 'react'
import Header from './Header'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { loadData, sendMessageToServer } from './data'

function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")
  const [message, setMessage] = useState("")

  async function loadMessagesFromTheServer(){
    const messages = await loadData()
    setMessages(messages)
  }

  async function sendMessage(){
    await sendMessageToServer(message, userName)
    setMessage("")
    await loadMessagesFromTheServer()
  }

  useEffect(function(){
    loadMessagesFromTheServer()
  }, [])

  return (
    <>
      <div style={{backgroundColor: "teal", height: '100vh', width: '100vw'}}>
        <Header userName={userName} setUserName={setUserName} reloadMessages={loadMessagesFromTheServer} />
        <Messages messages={messages}/>
        <SendMessage message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </>
  )
}

export default App
