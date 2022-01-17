const { findNewRecipe } = require('@controllers/recipes')
const { log } = require('@utils')
const fs = require('fs')
const path = require('path')

const writeFile = fs.promises.writeFile
const readFile = fs.promises.readFile
const dataDir = path.join(__dirname, '..', '..', 'data')

const getLastMealPlan = async () => {
	try {
		return readFile(path.join(dataDir, 'lastPlan.json'))
			.then((rawJSON) => {
				const lastPlan = JSON.parse(rawJSON)
				return lastPlan.map((value) => value.name, [])
			})
			.catch((error) => {
				throw Error(error)
			})
	} catch (error) {
		log.error(error)
	}
}

const saveMealPlan = (plan) => {
	try {
		writeFile(
			path.join(dataDir, 'lastPlan.json'), 
			JSON.stringify(plan)
		).catch((error) => log.error(error))
	} catch (error) {
		return error
	}
}

const generateMealPlan = async () => {
	let count = 7
	let list = []

	// Get the last meal plan
	const lastPlan = await getLastMealPlan()

	// Generate a new meal plan
	while (count > 0) {
		list.push(findNewRecipe(lastPlan))
		count = count - 1
	}
	
	// Save the new meal plan
	saveMealPlan(list)

	return list
}

module.exports = { generateMealPlan }
