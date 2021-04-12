import { jest } from '@jest/globals'
import findNewRecipe from './findNewRecipe.js'

describe('findNewRecipe', () => {
	it('should return true', () => {
		//Testing a boolean
		expect(findNewRecipe()).toBeTruthy()
		//Another way to test a boolean
		// expect(forgotPassword()).toEqual(true)
	})
})
