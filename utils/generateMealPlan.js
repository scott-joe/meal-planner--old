const utils = require('.')
const findNewRecipe = require('./findNewRecipe')

function generateMealPlan(lastPlan) {
	let count = 7
	let list = []

	while (count > 0) {
		list.push(findNewRecipe(lastPlan))
		count = count - 1
	}

	return list
}

const lastPlan = utils.getLastPlan()
const mealPlan = generateMealPlan(lastPlan)
utils.savePlan(mealPlan)
