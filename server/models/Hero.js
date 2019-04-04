const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Hero = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  skills: {
    type: String
  },
  biography: {
    type: String
  },
  imgUrl: {
    type: String
  },
  imgUrl: {
      collection: 'heroes'
  }
});

module.exports = mongoose.model('Hero', Hero);