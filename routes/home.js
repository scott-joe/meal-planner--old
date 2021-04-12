const express = require('express')
const fs = require('fs')
const path = require('path')
const cons = require('consolidate')
const utils = require('../utils')
const _ = require('lodash')

const router = express.Router({ mergeParams: true })

const dataDir = path.join('..', 'data')

// Index
router.get('/', (_req, res) => {
	const recipes = []

	try {
		const callback = (err, data) => {
			if (err) throw err
			const recipes = JSON.parse(data)

			cons.handlebars('views/home.hbs', { recipes }, function (err, html) {
				if (err) throw err
				res.send(html)
			})
		}

		fs.readFile(
			path.join(__dirname, dataDir, 'recipes.json'),
			utils.fsOpts,
			callback
		)
	} catch (error) {
		utils.log.error(error)
	}
})

module.exports = router
