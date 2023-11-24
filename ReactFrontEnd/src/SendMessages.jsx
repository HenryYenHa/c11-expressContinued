export default function SendMessage({msg,setMsg}){
  return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
    <input style={{width: '75%', color: 'blue', backgroundColor: 'white' }}type="text" placeholder='say something'   />


    <button>Send Message</button>    
  </div>
}