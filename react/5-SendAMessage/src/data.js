
export async function loadData() {
    try {
        const fetchRes = await fetch('http://localhost:3000/messages')
        const jsonRes = await fetchRes.json()
        return jsonRes
    } catch (err) {
        console.log('fetch error', err)
    }
}

export async function sendMessageToServer(message, userName){
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
        return response;
    } catch(error) {
        console.log("unexpected error", error)
    }
}