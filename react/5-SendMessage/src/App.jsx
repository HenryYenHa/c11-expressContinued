import { useState, useEffect } from 'react'

function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")

  async function loadMessages(){
    console.log('load messages')
    const fetchRes = await fetch('http://localhost:3000/messages')
    const jsonRes = await fetchRes.json()
    setMessages(jsonRes)
  }

  useEffect(()=>{
    loadMessages()
  }, [])

  return (
    <div style={{backgroundColor: 'teal', height: "100vh", width: '100vw'}}>
      <Header userName={userName} setUserName={setUserName} reloadMessages={loadMessages}/>
      <Messages messages = {messages}/>
      <SendMessage userName={userName} loadMessages={loadMessages} />
    </div>
  )
}

function Header({userName, setUserName, reloadMessages}){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <h2>Messages</h2>
    <input type="text" placeholder='Your Name' style={{color: 'blue', backgroundColor: 'white'}}
      value={userName} onChange={e => setUserName(e.target.value)} 
    />
    <button onClick={reloadMessages}>Refresh</button>
  </div>
}

function Messages(props) {
  const messages = props.messages;
  return <div style={{minHeight: "150px", padding: 15, border: '2px solid blue'}}>
      {messages.map((message, i) => {
        return <div key={i}>{message.userName} - {message.message}</div>
      })}
  </div>
}

async function sendMessage(userName, message, callback){
  try {
      const messageContent = {message}
      const response = await fetch(`http://localhost:3000/messages?userName=${userName}`, {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(messageContent)
      })
      if (!response.ok)
          alert('Failed to create message: '+ response.status +': '+response.statusText)
  } catch(error) {
      console.log("unexpected error", error)
  }
  callback()
}

function SendMessage({userName, loadMessages}){
  const [message, setMessage] = useState("")
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <input style={{width: '75%', color: 'blue', backgroundColor: 'white' }}type="text" placeholder='say something'
      value={message} onChange={(e)=>setMessage(e.target.value)}
    />
    <button onClick={()=>sendMessage(userName, message, 
    ()=>{
      setMessage("");
      loadMessages();
    })
    }>Send Message</button>    
  </div>
}

export default App
