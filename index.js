const express = require('express')

// =================================
// ===== CONFIGURE APPLICATION =====
// =================================
// Instantiate Express app instance
const app = express()

// Set up JSON
app.use(express.json())

// Set up body parser
app.use(express.urlencoded({ extended: true }))

// Set up images directory
app.use('/images', express.static('images'))

// Kill requests for the favicon
app.get('/favicon.ico', (_req, res) => res.end())

// Routes
const router = require('./routes')
app.use('/', router)

// =================================
// ========= START SERVER ==========
// =================================
// Create Server listening on port 3000 & capture server object to use later
const server = app.listen(3000, () => {
	console.log(`App is running on port ${server.address().port}`)
})
