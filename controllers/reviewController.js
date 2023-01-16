const BookModel = require("../models/bookModel")
const ReviewModel = require("../models/reviewModel")

const getAllReviews = async (req, res) => {
    const { bookID } = req.params

  try {
    const reviews = await ReviewModel.find({ bookID })
    res.status(200).send({ status: 'success', reviews })
  } catch (error) {
    res.status(500).send({ status: 'error', msg: "Error fetching book reviews from DB" })
  }
}

const addReview = async (req, res) => {
  const { bookID } = req.params

  const { comment,rating } = req.body//me edit like
  try {
    //1)Add the review in Review Collection
    const addedReview = await ReviewModel.create({ rating,comment, bookID })

    //2) Get the _id of review and insert it inside books Document
    const bookUpdatedDoc = await BookModel.findByIdAndUpdate(bookID, {
      $push: {

        reviews: addedReview._id  
      }
    })

    res.send({ status: 'success', review: addedReview })

  } catch (error) {
    res.status(500).send({ status: 'error', msg: 'Adding Review was failed' })
  }
}
//// deleting review not successfull
const deleteReview = async (req, res) => {
  const { bookID} = req.params
  const { rating,comment } = req.body
  
  try {
    const deletedReview = await ReviewModel.deleteOne({rating,comment,bookID})
    const deletedReviewDoc = await BookModel.findByIdAndUpdate(bookID,{
    $pull : {
      reviews:deletedReview._id
    }

    })

    res.status(200).send({status:'success',msg:'review deleted successfully'})
    
  } catch (error) {
    res.status(500).send({status:'error',msg:'review not deleted',error})
  }

}


module.exports = {
  getAllReviews,
  addReview,
  deleteReview
}
