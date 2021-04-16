const recipes = require('../data/recipes')
const utils = require('../utils')

const findNewRecipe = (lastPlan) => {
	if (!!lastPlan) {
		const number = utils.randomIntFromRange(recipes.length - 1)
		const item = recipes.splice(number, 1)[0]

		if (!lastPlan.includes(item.name)) {
			return item
		} else {
			return findNewRecipe(lastPlan)
		}
	} else {
		throw new Error('lastPlan not passed')
	}
}

module.exports = { findNewRecipe }
