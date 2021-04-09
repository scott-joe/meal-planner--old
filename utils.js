const fs = require('fs')

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

module.exports = {
	randomIntFromRange,
	getLastPlan,
	savePlan,
}
