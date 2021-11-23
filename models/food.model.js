const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;