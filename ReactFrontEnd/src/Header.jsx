export default function Header({refreshMessages, name, setName}){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <h2>Messages</h2>
    <input type="text" placeholder='Your Name' style={{color: 'blue', backgroundColor: 'white'}} 
    onChange={event => setName(event.target.value)}/>
    <button onClick={refreshMessages}>Refresh</button>
  </div>
}