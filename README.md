# Capstone

PantryPal+

## Overview

PantryPal+ is an app that aims to make planning, buying and storing you weekly meals easier. The app will allow you to create a grocery list that will then added to you on going pantry/rerigrator list allowing you keep track of your inventory. It will also then able to have a home that can add to weekly dashboard. It will also add remaning food items that are not present in you pantry/refrigrator to your grocery list.

### Problem

PantryPal+ is an app that makes the hard question "What am i going to eat?" easier to answer with many options of recipes. Everyday we have to consume food to allow us to have the energy to proceed onto our days. Deciding what to make for breakfast, lunch and dinner is time consuming. You have to figure out what food you have in the fridge then figure out what i can make from what you have after all that it might have taken 30+ mins and you still haven't made anything edible. This app will make it this planning process much simplier, faster and more exicting for your next meal.

### User Profile

- the busy 9-5 employee to create more time in their schedule
- mutli family household to allow them to have and idea with what food items are left to use
- people that do grocery shopping making it easier to create grocery list
- health conscious people given more insight of the food they eat

### Features

as a user, i want to be able to have daily schedule of what i am going to make durning the week
as a user, i want to be able to have inventory of food items and edit/delete items
as a user, i want to be able to add the remaining food items for a recipe to my grocery list
as a user, i want to be to my favorite recipes

## Implementation

### Tech Stack

- React
- Sass
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

List any external sources of data that will be used in your app.

`https://spoonacular.com/food-api `

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

home page/Dashboard
Grocery list
food item inventory
list of recipes

### Mockups

#### Home Page

![](./src/assets/mockups/Home_page.jpeg)

#### Grocery List

![](./src/assets/mockups/Grocery_list.png)

#### Inventory List

![](./src/assets/mockups/Inventory_list.jpeg)

#### Recipes Details

![](./src/assets/mockups/Recipe_Details.png)

#### Recipes list

![](./src/assets/mockups/Recipe_list.jpeg)

### Data

#### SQL Diagram

![](./src/assets/PantryPlus_SQL_Schema.png)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

## Roadmap

create client side with react, react router

create server side with express and knex

feature: Daily Meal Schedule Dashboard
add recipes
get recipes from API
table for each day of the week

feature: Grocery list
add food items from selected weekly recipes
manual input food items with quantity

feature: inventory Pantry/refrigator
Camera enable input of food items
populates items checked off from grocery list
suggestion of recipes that could be made

feature: dashboard
display saved recipes and be able to delete recipes

bugs fixes

demo day

## How to use

1. create a new schema in mySQL
2. In the Terminal of the pantrypal-api repo run "npm run migrate"
3. In the Terminal of the pantrypal-api repo run "npm run"
4. In the Terminal of the pantrypal repo run "npm run"

## Nice-to-haves

anylatics of consumptions of food items and recipes
scan and add automaticaly recipes from external websites
mutiple users sharing a dashboard
track macro nutrients (calories, protein, fats and carbs)
track micro nutrients (vitmans and nutrients)
notifacations of expiring soon food items
