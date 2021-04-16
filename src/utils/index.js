const fs = require('fs')
const path = require('path')
const debug = require('debug')

const fsOpts = { encoding: 'utf-8' }
const dataDir = path.join(__dirname, '..', 'data')

const log = {
	error: debug('error'),
	console: debug('console'),
}

const randomIntFromRange = (max) => {
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - 1))
}

const getLastPlan = () => {
	try {
		const lastPlan = JSON.parse(
			fs.readFileSync(path.join(dataDir, 'lastPlan.json'))
		)
		return lastPlan.map((value) => value.name, [])
	} catch (error) {
		return error
	}
}

const savePlan = (plan) => {
	try {
		fs.writeFileSync(path.join(dataDir, 'lastPlan.json'), JSON.stringify(plan))
	} catch (error) {
		return error
	}
}

// Sort by last (name) ascending
const compare = (a, b) => {
	const splitA = a.name.full.split(' ')
	const splitB = b.name.full.split(' ')
	const lastA = splitA[splitA.length - 1]
	const lastB = splitB[splitB.length - 1]

	if (lastA < lastB) return -1
	if (lastA > lastB) return 1
	return 0
}

module.exports = {
	fsOpts,
	log,
	compare,
	randomIntFromRange,
	getLastPlan,
	savePlan,
}
