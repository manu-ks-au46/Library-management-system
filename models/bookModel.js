const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const bookSchema = new Schema({
  bookName: {
     type: String,
     unique: true,
     minLength: 1,
     maxLength: 50,
    },
  ISBN: {
      type: Number,
      unique: true,
      min: 1,
      max: 13,
     },
  authorName: {
     type: String,
     minLength: 1,
     maxLength: 30,
    },
  price: {
     type: Number,
     min: 1,
     max: 1000,
     },
  publisher:{
      type: String,
     unique: true,
     minLength: 1,
     maxLength: 50,
    },
  discription:{
      type: String,
     unique: true,
     minLength: 1,
     maxLength: 300,
    },

  releaseDate: {
     type: Date,
     default: Date.now()
    },
    rating: {
      type: Number,
      min: 0,
      max: 5
    },
    reviews: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'reviews'
    }],
  imageUrl: {
    type: String
    },
  pdfUrl: {
    type: String
    },
})
const BookModel = mongoose.model('books', bookSchema)

module.exports = BookModel