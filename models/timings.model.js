const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TimingSchema = new Schema({
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
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  shows: [{
        screenId: {
            type: Schema.Types.ObjectId,
            ref: 'Screen'
        },
        date: {
            type: String
        }
    }]
});

const Timing = mongoose.model('Timing', TimingSchema);

module.exports = Timing;