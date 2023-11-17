window.onload = loadData()

async function loadData() {
    console.log('loading data')
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
        newMessageDiv.textContent = msg.message
        messageDiv.append(newMessageDiv)
    });
}

async function sendMessage(){
    var newMessageInput = document.getElementById('newMessage')
    const text = newMessageInput.value
    await sendMessageToServer(text)
    newMessageInput.value = ''
    loadData()
}

async function sendMessageToServer(message){
    try {
        const messageContent = {message}
        const response = await fetch('http://localhost:3000/messages', {
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