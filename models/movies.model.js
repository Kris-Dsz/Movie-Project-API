const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  year:{
    type: String,
    required: true
  },
  rated: {
      type: String,
      required: true
  },
  runtime: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  writer: {
    type: String,
    required: true,
    trim: true
  },
  cast: {
    type: String,
    required: true,
    trim: true
  },
  plot: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  awards: {
    type: String,
    required: true,
    trim: true
  },
  poster: {
    type: String,
    required: true,
    trim: true
  },
  ratings: [{
    source: String,
    value: String 
  }],
  production: {
    type: String,
    required: true,
    trim: true
  },
  response: {
    type: String,
    default: "True"
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;