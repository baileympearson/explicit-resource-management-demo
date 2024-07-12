// this file is broken under this configuration
import { MongoClient } from "mongodb";

console.log('no resource management, old lib version, ts 4.5');

async function main() {
	const client = new MongoClient(process.env.MONGODB_URI!);
	const session = client.startSession();
	const cursor =  client.db('foo').collection('bar').find();
	const cursorStream = cursor.clone().stream();
	const cs = client.db('foo').watch([]);
	console.error('created all resources, leaving method')
}

main();