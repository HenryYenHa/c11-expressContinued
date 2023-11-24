export default function Messages({msg}) {
  console.log(props);
  console.log(props.msg);
  return <div style={{minHeight: "150px", padding: 15, border: '2px solid blue'}}>
      {msg.map((myMessage, index) => {
        return <div key={index}>{myMessage.userName} - {myMessage.message} </div>
      }
      )
    }

  </div>
}