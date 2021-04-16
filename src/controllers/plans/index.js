const { findNewRecipe } = require('@controllers/recipes')

const generateMealPlan = (lastPlan) => {
	let count = 7
	let list = []

	while (count > 0) {
		list.push(findNewRecipe(lastPlan))
		count = count - 1
	}

	return list
}

module.exports = { generateMealPlan }
