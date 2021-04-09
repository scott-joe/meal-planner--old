
# Meal Planner

## Purpose

To help cut down on the effort going into meal planning each week

## Running
1. `npm start` or `node .`

## Roadmap

- [x] Totally random
- [x] Make fs based list of recipes
- [x] Make fs based persistence
- [x] Don't reuse ones from last week
- [ ] Mix up primary ingredients
  - [ ] Variety
  - [ ] Healthy
  - [ ] Pescatarian
  - [ ] Vegitarian
  - [ ] Vegan
  - [ ] Reduced protein
  - [ ] Specific array of options (E.g., "Fish, Beef, Fish, Chicken, Fish, Lamb, Fish")
- [ ] Include 'eat-out' night. Set night of the week?
- [ ] Respect religious days of the week that don't eat specific things on certain days of the week
- [ ] Create list of places to eat out that can fit into the rest of the meal plan. E.g., don't offer up a chicken place if you've already had chicken twice this week.
- [ ] Options
  - [ ] Work on fewer meals with meat
  - [ ] Specify how many days to eat out
  - [ ] Specify main course vs sides and build meals with appropriate sides
- [ ] Interactive meal plan builder. Ask some questions to set options. Given a few options for each day, select as you go.

## Technical things

1. Create database of recipes
2. Create user's table with their recipes
3. Create API to request their or all recipes
4. Store the user's most recent list of used recipes
