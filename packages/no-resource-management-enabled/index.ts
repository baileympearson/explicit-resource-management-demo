import { MongoClient } from "mongodb";

async function main() {
	const client = new MongoClient('mongodb://localhost:27027');
	const session = client.startSession();
	const cursor =  client.db('foo').collection('bar').find();
	const cursorStream = cursor.clone().stream();
	const cs = client.db('foo').watch([]);
	console.error('created all resources, leaving method')
}

main();