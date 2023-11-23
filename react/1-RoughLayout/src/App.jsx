import { useState, useEffect } from 'react'
import Header from './Header'
import Messages from './Messages'
import SendMessage from './SendMessage'

function App() {
  return (
    <>
      <div style={{backgroundColor: "teal", height: '100vh', width: '100vw'}}>
        <Header />
        <Messages />
        <SendMessage />
      </div>
    </>
  )
}

export default App
