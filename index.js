require('dotenv').config(); // Load variables from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
    // Start the Express server only after the DB is connected
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Middleware to parse JSON body for POST/PUT requests
app.use(express.json());

// Import your model
const User = require('./models/user.model');

// Create a new user
app.post('/user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read users data
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update user
app.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateData);  // or use .updateOne({_id:id, $set: updateData})
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user
app.delete('/user/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);  // or use .deleteOne({_id:id})
    res.status(200).json(deleteUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});