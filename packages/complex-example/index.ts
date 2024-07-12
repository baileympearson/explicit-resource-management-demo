import { MongoClient  } from 'mongodb/next';

console.log('latest node types, import helpers & latest ts');
console.log('\n')

async function main() {
	await using client = new MongoClient(process.env.MONGODB_URI!);

	const collection = client.db('foo').collection('bar');
 
	await collection.insertMany([{ name: 'bailey' }, { name: 'camille' }, { name: 'bumpy' }]);
	{
		await using cursor = collection.find();
		console.log('scoped cursor');
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

	{
		console.log('for-await');
		const cursor = collection.find();
		for await (const doc of cursor.stream()) break;
		console.log('for-await...done.');
	}

	{
		console.log('stream');
		const cursor = collection.find();
		await using stream = cursor.stream();
		stream.on('error', console.log)
		console.log('stream...done');
	}

	console.log('\n');
	console.error('created all resources, leaving method')
}

main();