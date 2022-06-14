# Foodie API

A simple REST API for performing fetching data from and writing data to a MongoDB databse.

## Prerequisites
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose.js](https://mongoosejs.com/)

## API Routes
- `/`: Returns all the categories of Recipes.
- `/recipes`: Returns all the recipes present in database.
- `/recipes/:id`: Returns the recipe with the given id.
- `/add`: Adds a new recipe to the database.
- `/delete/:id`: Deletes the recipe with the given id.
- `/update/:id`: Updates the recipe with the given id.
