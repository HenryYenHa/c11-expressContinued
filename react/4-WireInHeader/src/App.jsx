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
  
  console.log('userName is now', userName)

  return (
    <div style={{backgroundColor: 'teal', height: "100vh", width: '100vw'}}>
      <Header userName={userName} setUserName={setUserName} reloadMessages={loadMessages}/>
      <Messages messages = {messages}/>
      <SendMessage />
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

function SendMessage(){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <input style={{width: '75%', color: 'blue', backgroundColor: 'white' }}type="text" placeholder='say something'/>
    <button>Send Message</button>    
  </div>
}

export default App
