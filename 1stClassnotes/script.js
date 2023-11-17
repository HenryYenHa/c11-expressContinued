window.onload = getMessages

async function getMessages() {
    var result = 
        await fetch('http://localhost:3001/messages')
    var json = await result.json()
    displayMessages(json)
}

function displayMessages(messages) {
    console.log('got messages', messages)
    var messagesDiv = document.getElementById('messages')
    messagesDiv.innerHTML = ''
    messages.forEach(msg => {
        var newMessageDiv = document.createElement('div')
        newMessageDiv.textContent = msg.message
        messagesDiv.append(newMessageDiv)
    });
}

function sendMessage() {
    var newMessageInput = document.getElementById("newMessage")
    var newMessageText = newMessageInput.value
    sendMessageToServer(newMessageText)
}

async function sendMessageToServer(message)
{
    var messageBody = {message: message}
    var result = await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageBody)
    })
}