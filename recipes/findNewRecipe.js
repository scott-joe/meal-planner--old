const recipes = require('./recipes')
const utils = require('../utils')

export default findNewRecipe = (lastPlan) => {
	const number = utils.randomIntFromRange(recipes.length - 1)
	const item = recipes.splice(number, 1)[0]

	if (!lastPlan.includes(item.name)) {
		return item
	} else {
		return findNewRecipe(lastPlan)
	}
}
