const findNewRecipe = require('../recipes/findNewRecipe')

const generateMealPlan = (lastPlan) => {
	let count = 7
	let list = []

	while (count > 0) {
		list.push(findNewRecipe(lastPlan))
		count = count - 1
	}

	return list
}

module.exports = generateMealPlan
