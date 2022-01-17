// DB Client
const { Client } = require('pg')
const opts = {
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
}

const store = async () => {
	try {
		const client = new Client(opts)

		await client.connect()

		// const res = await client.query(text, values)
		const res = await client.query('SELECT name from courses')
		
		await client.end()
		
		return res.rows
	} catch (err) {
		console.log(err.stack)
	}
}

module.exports = { store }