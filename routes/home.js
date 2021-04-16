const express = require('express')
const cons = require('consolidate')
const utils = require('../utils')
const { generateMealPlan } = require('../plans')

const router = express.Router({ mergeParams: true })

// Index
router.get('/', (_req, res) => {
	try {
		const lastPlan = utils.getLastPlan()

		const mealPlan = generateMealPlan(lastPlan)

		utils.savePlan(mealPlan)

		cons.handlebars('views/home.hbs', { mealPlan }, function (err, html) {
			if (err) throw err
			res.send(html)
		})
	} catch (error) {
		utils.log.error(error)
	}
})

module.exports = router
