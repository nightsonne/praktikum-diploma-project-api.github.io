const mongoose = require('mongoose');
const validator = require('validator');

const articlesSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  title: {
    type: String,
    required: true,
    minlength: 8,
  },
  text: {
    type: String,
    minlength: 2,
    required: true,
  },
  date: {
    type: String,
    minlength: 8,
    required: true,
  },
  source: {
    type: String,
    minlength: 2,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (val) => validator.isURL(val),
      message: 'URL validation failed',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (val) => validator.isURL(val),
      message: 'URL validation failed',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

module.exports = mongoose.model('article', articlesSchema);
