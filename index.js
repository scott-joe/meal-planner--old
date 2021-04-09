const recipes = require('./recipes')
const utils = require('./utils')

function findNewRecipe(lastPlan) {
	const number = utils.randomIntFromRange(recipes.length - 1)
	const item = recipes.splice(number, 1)[0]

	if (!lastPlan.includes(item.name)) {
		return item
	} else {
		return findNewRecipe(lastPlan)
	}
}

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

console.log(mealPlan.map((meal) => meal.name))
console.log(mealPlan.map((meal) => meal.name))
