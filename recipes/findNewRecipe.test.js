const findNewRecipe = require('./findNewRecipe.js')
const lastPlan = require('../data/lastPlan')

describe('findNewRecipe', () => {
	it('should return an object', () => {
		expect(() => {
			findNewRecipe(lastPlan).toHaveReturned()
		})
	})

	it('should throw error when no plan is provided', () => {
		expect(() => {
			findNewRecipe()
		}).toThrow(Error('lastPlan not passed'))
	})

	xit('returned value should be an array', () => {
		expect(() => {
			findNewRecipe()
		})
	})

	xit('should not return items from the last meal plan', () => {})

	xit('should return an item', () => {})
})
