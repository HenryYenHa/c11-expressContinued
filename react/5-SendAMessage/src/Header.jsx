export default function Header({userName, setUserName, reloadMessages}){
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
      <h2>Messages</h2>
      <input type="text" placeholder='Your Name' style={{color: 'blue', backgroundColor: 'white'}}
        value={userName} onChange={(e)=>setUserName(e.target.value)}
      />
      <button onClick={reloadMessages}>Refresh</button>
    </div>
  }