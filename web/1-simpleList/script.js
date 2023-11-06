window.onload = async function () {
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