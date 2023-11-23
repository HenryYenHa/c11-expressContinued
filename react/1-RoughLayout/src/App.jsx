import { useState } from 'react'

function App() {
  return (
    <div style={{backgroundColor: 'teal', height: "100vh", width: '100vw'}}>
      <Header/>
      <Messages/>
      <SendMessage />
    </div>
  )
}

function Header(){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <h2>Messages</h2>
    <input type="text" placeholder='Your Name' style={{color: 'blue', backgroundColor: 'white'}}/>
    <button>Refresh</button>
  </div>
}

function Messages() {
  return <div style={{minHeight: "150px", padding: 15, border: '2px solid blue'}}></div>
}

function SendMessage(){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <input style={{width: '75%', color: 'blue', backgroundColor: 'white' }}type="text" placeholder='say something'/>
    <button>Send Message</button>    
  </div>
}

export default App
