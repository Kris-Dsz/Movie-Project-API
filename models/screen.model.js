const mongoose = require('mongoose');

// Screen Schema
const Schema = mongoose.Schema
const ScreenSchema = new Schema({
  reservedSeats: {
    type: Array,
    default: []
  },
  seats: {
    row0: {
      type: Array,
      default: [1,6,11,16,21]
    },
    row1: {
        type: Array,
        default: [2,7,12,17,22]
    },
    row2: {
        type: Array,
        default: [3,8,13,18,23]
    },
    row3: {
        type: Array,
        default: [4,9,14,19,24]
    },
    row4: {
        type: Array,
        default: [5,10,15,20,25]
    }
  }
});

// Screen model
const Screen = mongoose.model('Screen', ScreenSchema);
module.exports = Screen;