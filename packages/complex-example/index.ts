import { MongoClient } from "mongodb";

console.log('latest node types, import helpers & latest ts');
console.log('\n')

async function main() {
	await using client = new MongoClient(process.env.MONGODB_URI!);

	const collection = client.db('foo').collection('bar');

	await collection.insertMany([{ name: 'bailey' }, { name: 'camille' }, { name: 'bumpy' }]);
	{
		console.log('scoped cursor');
		await using cursor = collection.find();
		for await (const document of cursor) {
			console.log(document);
		}

		console.log('closing cursor');
	}

	console.log('\n');
	{
		console.log('scoped cursor and session');
		await using session = client.startSession();
		await using cursor = collection.find({}, { session });
		for await (const document of cursor) {
			console.log(document);
		}
		console.log('closing cursor and session');
	}

	console.log('\n');
	console.error('created all resources, leaving method')
}

main();