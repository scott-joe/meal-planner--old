const stream = require('stream')
const { promisify } = require('util')
const fs = require('fs')
const got = require('got')

const pipeline = promisify(stream.pipeline)

const gotExample = async () => {
	try {
		const response = await got('https://www.nodesource.com/')
		console.log(response.body)
	} catch (error) {
		console.log(error.response.body)
	}
}

const jsonExample = async () => {
	const { body } = await got.post('https://httpbin.org/anything', {
		json: {
			hello: 'world',
		},
		responseType: 'json',
	})

	console.log(body.data)
}

const streamExample = async () => {
	await pipeline(
		got.stream('https://sindresorhus.com'),
		fs.createWriteStream('index.html')
	)

	await pipeline(
		fs.createReadStream('index.html'),
		got.stream.post('https://sindresorhus.com')
	)
}
