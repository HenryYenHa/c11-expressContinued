import {MongoClient} from 'mongodb'

const uri="mongodb+srv://Cluster43977:Chris123@cluster43977.hnjz2p8.mongodb.net/?retryWrites=true&w=majority"

let client = new MongoClient(uri)

async function GetMessagesCollection(){
    await client.connect()
    var db = await client.db('simpleChat')
    var messageCollection = await db.collection('messages')
    return messageCollection
}

export async function getMessages(){
    var connection = await GetMessagesCollection()
    var messages = await connection.find().toArray()
    return messages
}

export async function addMessage(message, userName){
    message.userName = userName
    var connection = await GetMessagesCollection()
    await connection.insertOne(message)
}