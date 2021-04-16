// == IMPORTS ==
const express = require('express')

// == SETUP ==
// Instantiate Express app instance
const app = express()

// Set up JSON
app.use(express.json())

// Set up body parser
app.use(express.urlencoded({ extended: true }))

// Set up images directory
app.use('/images', express.static('../public/images'))

// Kill requests for the favicon
app.get('/favicon.ico', (_req, res) => res.end())

// Bind Sub-Routes
const router = require('@routes')
app.use('/', router)

// == EXPORTS ==
module.exports = app
