const fs = require('fs')
const debug = require('debug')
// const path = require('path')
// const _ = require('lodash')

const fsOpts = { encoding: 'utf-8' }
const log = {
	error: debug('error'),
	console: debug('console'),
}

const randomIntFromRange = (max) => {
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - 1))
}

const getLastPlan = () => {
	const lastPlan = []

	try {
		const lastPlan = JSON.parse(fs.readFileSync('./lastPlan.json'))
	} catch (error) {
		console.log(error)
	}

	return lastPlan.map((value) => value.name, [])
}

const savePlan = (plan) => {
	fs.writeFileSync('./lastPlan.json', JSON.stringify(plan))
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
