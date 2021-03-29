const recipes = require('./recipes')
const utils = require('./utils')

function findNewRecipe() {
  const number = utils.randomIntFromRange(recipes.length - 1)
  const item = recipes.splice(number, 1)[0]

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

const lastPlan = utils.getLastPlan()
const mealPlan = generateMealPlan(lastPlan)
utils.savePlan(mealPlan)

console.log(mealPlan)
