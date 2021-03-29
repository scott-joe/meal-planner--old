const recipes = require('./recipes')
const utils = require('./utils')

function findNewRecipe() {
  var number = utils.randomIntFromRange(recipes.length - 1)
  var item = recipes.splice(number, 1)[0]

  if (!lastPlan.includes(item.name)) {
    return item
  } else {
    return findNewRecipe()
  }
}

function generateMealPlan(lastPlan) {
  var count = 7
  var list = []

  while (count > 0) {
    list.push(findNewRecipe())
    count = count - 1
  }

  return list
}

var lastPlan = utils.getLastPlan()
var mealPlan = generateMealPlan(lastPlan)

utils.savePlan(mealPlan)
console.log(mealPlan)
