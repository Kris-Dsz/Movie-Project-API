const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true,
    trim: true
  },
  cinema: {
    type: String,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true
  },
  date: {
      type: String,
      required: true
  },
  seatsBooked:{
      type: Array,
      required: true
  },
  cost:{
      type: Number,
      required: true
  },
  food: [{
          name: {
            type: String
          },
          price: {
            type: Number
          },
          count: {
            type: Number
          }
  }],
  purchasedate: {
      type: Date
  },
  poster: {
    type: String
  } 
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;