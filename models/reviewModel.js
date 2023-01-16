const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const reviewSchema = new Schema({
  comment: {
    type: String,
    maxLength: 1000
  },
  rating: {
    type: Number,
    default: 0,
    min:0,
    max:5
  },
  postedOn: {
    type: Date,
    default: Date.now()
  },
  bookID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'books'
  }
})

const ReviewModel = mongoose.model('reviews', reviewSchema)

module.exports = ReviewModel