import { MongoClient } from "mongodb";

console.log('latest node types, import helpers & latest ts');
async function main() {
	await using client = new MongoClient(process.env.MONGODB_URI!);
	await using session = client.startSession();
	await using cursor =  client.db('foo').collection('bar').find();
	await using cursorStream = cursor.clone().stream();
	await using cs = client.db('foo').watch([]);
	console.error('created all resources, leaving method')
}

main();