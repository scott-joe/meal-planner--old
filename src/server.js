// == IMPORTS ==
require('module-alias/register')
const app = require('@root/app')

// == SETUP ==
const port = process.env.PORT || 3000

// METHODS
const server = app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})

// == EXPORTS ==
module.exports = server
