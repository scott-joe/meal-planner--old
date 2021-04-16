const express = require('express')
const path = require('path')
const cons = require('consolidate')
const utils = require('@utils')
const { generateMealPlan } = require('@controllers/plans')

const router = express.Router({ mergeParams: true })
const viewsDir = path.join(__dirname, '..', 'views')

// Index
router.get('/', (_req, res) => {
	try {
		// Get the last meal plan
		const lastPlan = utils.getLastPlan()
		// Generate a new meal plan
		const mealPlan = generateMealPlan(lastPlan)
		// Save the new meal plan
		utils.savePlan(mealPlan)
		// Return new meal plan to browser
		cons.handlebars(
			path.join(viewsDir, 'home.hbs'),
			{ mealPlan },
			function (err, html) {
				if (err) throw err
				res.send(html)
			}
		)
	} catch (error) {
		utils.log.error(error)
	}
})

module.exports = router
