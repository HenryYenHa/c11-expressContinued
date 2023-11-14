const messages = [{message: "one"}, {message: "two"}]

export function getMessages() {
    return messages
}

export function addAMessage(message) {
    messages.push(message)
}