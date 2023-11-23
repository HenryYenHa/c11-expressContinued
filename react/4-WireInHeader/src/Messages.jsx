export default function Messages(props) {
    const messages = props.messages
    return <div style={{minHeight: "150px", padding: 15, border: '2px solid blue'}}>
        {messages.map((message, i) => {
            return <div key={i}>{message.userName} - {message.message}</div>
        })}
    </div>
  }