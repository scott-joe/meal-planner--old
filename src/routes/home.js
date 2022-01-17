// == IMPORTS ==
const express = require('express')
const path = require('path')
const cons = require('consolidate')
const { log } = require('@utils')
const { generateMealPlan } = require('@controllers/plans')
const { store } = require('@clients/store')

// == SETUP ==
const router = express.Router({ mergeParams: true })
const viewsDir = path.join(__dirname, '..', 'views')

// == METHODS ==
// Index
router.get('/', async (_req, res) => {
	try {
		const dbTest = await store()
		console.log(dbTest.map((course) => course.name))

		// Generate a new meal plan
		const mealPlan = await generateMealPlan()
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
		log.error(error)
	}
})

// == EXPORTS ==
module.exports = router
