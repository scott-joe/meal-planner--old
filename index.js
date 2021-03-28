const recipes = require('./recipes')
const utils = require('./utils')

function generateMealPlan(lastPlan) {
  var count = 7
  var list = []

  while (count > 0) {
    var number = utils.randomIntFromRange(recipes.length)
    // if item index in lastPlan, find another
    var item = recipes.splice(number, 1)[0]
    list.push(item)
    count = count - 1
  }

  return list
}

var lastPlan = utils.getLastPlan()
var mealplan = generateMealPlan(lastPlan)
utils.savePlan(mealplan)

console.log(mealplan)
