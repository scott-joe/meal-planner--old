const { store } = require('@clients/store')

const utils = require('@utils')

const get = async (id) => {
	// set up query
	const opts = {
		text: 'SELECT * FROM recipes WHERE id = $1',
  		values: [id],
	}
	
	const result = await store.query(opts)
	return result[0]
}

// const put = async (id, data) => {
// 	return true
// }

// const destroy = async (id) => {
// 	return true
// }

const findNewRecipe = (lastPlan) => {
	// Get a simple list of recipes to iterate over
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

// const writeRecipe
	// also update
// const readRecipe
// const deleteRecipe

module.exports = { get }
