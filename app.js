// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/yourDBName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Add MongoDB models
const Product = require('./models/product');

// Set view engine and static folder
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
