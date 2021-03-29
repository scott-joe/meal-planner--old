const fs = require('fs')

const randomIntFromRange = function (max) {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - 1))
}

const getLastPlan = function () {
  const lastPlan = JSON.parse(fs.readFileSync('./lastPlan.json'))
  return lastPlan.map((value) => value.name, [])
}

const savePlan = function (plan) {
  fs.writeFileSync('./lastPlan.json', JSON.stringify(plan))
}

module.exports = {
  randomIntFromRange,
  getLastPlan,
  savePlan,
}
