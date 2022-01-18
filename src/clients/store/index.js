// DB Client
const { Client } = require('pg')
const storeConfig = require('@config/store')

// async function* store() {
// 	try {
// 		const client = new Client(storeConfig)
// 		await client.connect()
// 		yield
// 		await client.end()
// 		yield
// 	} catch (err) {
// 		console.log(err.stack)
// 	}
// }

const query = async (query) => {
	// const db = await store()
	try {
		const client = new Client(storeConfig)
		await client.connect()
		const res = await client.query(query)
		await client.end()
		return res.rows
	} catch (err) {
		console.log(err.stack)
	}
	// db.next()
	// return res.rows
}

module.exports = { 
	store: {
		query
	}
}