import { MongoClient, ServerApiVersion} from "mongodb";
import dotenv from 'dotenv'

dotenv.config()
const client = new MongoClient(process.env.connectionString);

async function getMessageCollection(){
    await client.connect()
    var db = await client.db('simpleChat')
    var messages = await db.collection('messages')
    return messages
}

export async function getMessages(){
    var messageCollection = await getMessageCollection()
    console.log('messageCollection', messageCollection)
    var allTheMessages = await messageCollection.find().toArray();
    console.log('messages', allTheMessages)
    return allTheMessages;
}

export async function addMessage(message){
    var messageCollection = await getMessageCollection()
    await messageCollection.insertOne(message)
}