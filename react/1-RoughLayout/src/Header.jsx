export default function Header(){
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
      <h2>Messages</h2>
      <input type="text" placeholder='Your Name' style={{color: 'blue', backgroundColor: 'white'}}/>
      <button>Refresh</button>
    </div>
  }