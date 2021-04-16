// jest.config.js
module.exports = {
	verbose: true,
	moduleNameMapper: {
		'@root/(.*)': '<rootDir>/src/$1',
		'@clients/(.*)': '<rootDir>/src/clients/$1',
		'@config/(.*)': '<rootDir>/src/config/$1',
		'@controllers/(.*)': '<rootDir>/src/controllers/$1',
		'@models/(.*)': '<rootDir>/src/models/$1',
		'@routes/(.*)': '<rootDir>/src/routes/$1',
		'@utils/(.*)': '<rootDir>/src/utils/$1',
		'@views/(.*)': '<rootDir>/src/views/$1',
	},
}
