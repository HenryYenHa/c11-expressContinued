import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const uri = process.env.messageMongoUri
console.log('uri', uri)

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