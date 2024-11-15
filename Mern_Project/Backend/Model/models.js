const db = require('../config');
const Hotel = db.model("Restaurant", {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['chinese', 'thai', 'continental', 'south', 'north', 'andhra'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    //number between 1-5
    type: Number,
    required: true

  },
  topFood: {
    type: String,
    required: true
  }
})


module.exports = {Hotel}