window.onload = loadData()

async function loadData() {
    try {
        const fetchRes = await fetch('http://localhost:3000/messages')
        const jsonRes = await fetchRes.json()
        displayMessages(jsonRes)
    } catch (err) {
        console.log('fetch error', err)
    }
}

function displayMessages(messages){
    var messageDiv = document.getElementById('messages')
    messageDiv.innerHTML = ''
    messages.forEach(msg => {
        var newMessageDiv = document.createElement('div')
        newMessageDiv.textContent = msg.userName + ' - '+msg.message
        messageDiv.append(newMessageDiv)
    });
}

async function sendMessage(){
    var newMessageInput = document.getElementById('newMessage')
    const text = newMessageInput.value

    var userName = document.getElementById('userName').value
    await sendMessageToServer(text, userName)

    newMessageInput.value = ''
    loadData()
}

async function sendMessageToServer(message, userName){
    try {
        const messageContent = {message}
        const response = await fetch(`http://localhost:3000/messages?userName=${userName}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(messageContent)
        })
        if (!response.ok)
            alert('Failed to create message: '+ response.status +': '+response.statusText)
    } catch(error) {
        console.log("unexpected error", error)
    }
}