export default function SendMessage({message, setMessage, sendMessage}){
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
      <input style={{width: '75%', color: 'blue', backgroundColor: 'white' }}type="text" placeholder='say something'
        value={message} onChange={e=>setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>    
    </div>
  }