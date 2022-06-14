const express = require("express");
const mongoose = require("mongoose");

const port = 3000;

const app = express();

mongoose.connect("mongodb://localhost:27017/test");

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: [String],
  category: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// Returns all the categories of Recipes.
app.get("/", (req, res) => {
  Recipe.distinct("category", (err, categories) => {
    if (err) {
      res.send(err);
    } else {
      res.send(categories);
    }
  });
});

// Returns all the recipes present in database.
app.get("/recipes", (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipes);
    }
  });
});

// Returns the recipe with the given id.
app.get("/recipes/:id", (req, res) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

// Adds a new recipe to the database.
app.post("/add", (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save((err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

// Deletes the recipe with the given id.
app.delete("/delete/:id", (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

// Updates the recipe with the given id.
app.put("/update/:id", (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
