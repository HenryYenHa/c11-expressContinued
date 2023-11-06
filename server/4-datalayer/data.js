const messages = [
    {message: 'welcome to simple chat'}
]

export function getMessages(){
    return messages
}

export function addMessage(message){
    messages.push(message)
}