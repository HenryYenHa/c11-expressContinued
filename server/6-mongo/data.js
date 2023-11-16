import { MongoClient, ServerApiVersion} from "mongodb";
const connectionString = 'mongodb+srv://Cluster43977:X2x+Y3l2YHFF@cluster43977.hnjz2p8.mongodb.net/?retryWrites=true&w=majority'

// const messages = [
//     {userName: 'system', message: 'welcome to simple chat from mongo!'}
// ]
const client = new MongoClient(connectionString);

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