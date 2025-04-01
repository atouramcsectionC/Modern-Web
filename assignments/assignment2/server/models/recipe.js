// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  ingredients: [{ type: String }],
  steps: [{ type: String }],
});

module.exports = mongoose.model('Recipe', recipeSchema);