const path = require('path')
const fs = require('fs')
const { findNewRecipe } = require('@controllers/recipes')
const { log, fsOpts } = require('@utils')

const writeFile = fs.promises.writeFile
const readFile = fs.promises.readFile
const dataDir = path.join(__dirname, '..', '..', 'data')

const getLastMealPlan = async () => {
	try {
		// Get the last meal plan and return it
		return readFile(path.join(dataDir, 'lastPlan.json'), fsOpts)
			.then((rawJSON) => {
				// Parse the JSON
				const lastPlan = JSON.parse(rawJSON)
				// Return a simple array version of the list
				return lastPlan.map((value) => value.name, [])
			})
			.catch((error) => {
				throw Error(error)
			})
	} catch (error) {
		log.error(error)
		return error
	}
}

const saveMealPlan = (plan) => {
	try {
		// Save the new meal plan to disk
		writeFile(
			path.join(dataDir, 'lastPlan.json'), 
			JSON.stringify(plan),
			fsOpts
		).catch((error) => log.error(error))
	} catch (error) {
		log.error(error)
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
	
	// Save the new meal plan to become the 'last' meal plan
	saveMealPlan(list)

	return list
}

module.exports = { generateMealPlan }
