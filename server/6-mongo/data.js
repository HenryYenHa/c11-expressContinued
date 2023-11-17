import { MongoClient} from "mongodb";

var connectionString = 'mongodb+srv://Cluster43977:Chris123@cluster43977.hnjz2p8.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(connectionString);

async function getMessageCollection(){
    await client.connect()
    var db = await client.db('simpleChat')
    var messages = await db.collection('messages')
    return messages
}

export async function getMessages(){
    var messageCollection = await getMessageCollection()
    var allTheMessages = await messageCollection.find().toArray();
    return allTheMessages;
}

export async function addMessage(message){
    var messageCollection = await getMessageCollection()
    await messageCollection.insertOne(message)
}