const express = require('express')
const path = require('path')
const utils = require('@utils')
const cons = require('consolidate')
const recipes = require('@controllers/recipes')

const router = express.Router({ mergeParams: true })
const viewsDir = path.join(__dirname, '..', 'views')

const verifyRecipe = (_req, _res, next) => {
	next()
}

// Logging middleware for username calls
router.all('/', (req, _res, next) => {
	utils.log.console(`${req.method} for ${req.params.id}`)
	next()
})

// Read Recipe
router.get('/', verifyRecipe, async (req, res) => {
	const id = req.params.id
	const recipe = await recipes.get(id)

	cons.handlebars(
		path.join(viewsDir, 'recipe.hbs'),
		{ recipe: recipe },
		function (err, html) {
			if (err) throw err
			res.send(html)
		}
	)
})

// // Update user
// router.put('/', verifyRecipe, (req, res) => {
// 	try {
// 		// Get username from params
// 		const username = req.params?.username
// 		// Get user data from file
// 		const user = utils.getUser(username)
// 		// Get location information from form submission
// 		user.location = req.body
// 		// save user data
// 		saveUser(username, user)
// 		// send response
// 		// res.end()
// 		res.status(200).send('User Updated')
// 	} catch (error) {
// 		utils.log.error(error)
// 		res.status(500).send(NODE_ENV ? 'Error updating user' : error)
// 		throw error
// 	}
// })

// // Delete user
// router.delete('/', verifyRecipe, (req, res) => {
// 	try {
// 		// get username
// 		const username = req.params.username
// 		const filename = utils.getUserFilePath(username)
// 		// delete user file
// 		fs.unlinkSync(filename)
// 		res.status(200).send('User Deleted')
// 	} catch (error) {
// 		utils.log.error(error)
// 		res.status(500).send(NODE_ENV ? 'Error deleting user' : error)
// 		throw error
// 	}
// })

module.exports = router
