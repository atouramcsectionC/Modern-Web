// server.js
const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipes_router');
const cors = require('cors'); // Import cors
const env = require('dotenv'); // Import cors

const app = express();
env.config();

const PORT = process.env.PORT;


app.use(cors()); // Use cors middleware
app.use(express.json()); // Parse JSON bodies
app.use('/recipe', recipeRouter); // Use the recipe router

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, { // Replace with your MongoDB connection string
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});