const {Router} = require('express')
const {getBooks,getBooksbyId,postBooks,updateBooks,deleteBooks,downloadBook}=require('../controllers/bookcontroller')
const {verifyToken,isAdmin} = require('../middlewares/userMiddleware')
const { addReview, getAllReviews,deleteReview} = require('../controllers/reviewController')

//middleware - from  user-middleware


const bookRouter = Router()

//token-jwt

bookRouter.use(verifyToken)

//book Routes- user access

bookRouter.get('/', getBooks)
bookRouter.get('/:bookId', getBooksbyId)
//download book is pending here
bookRouter.get('/:bookId/download', downloadBook)

//review for users

bookRouter.post('/:bookID/reviews', addReview)
bookRouter.get('/:bookID/reviews', getAllReviews)

//delete review-needs to add---------------------------------------------

bookRouter.post('/:bookID/reviews/delete', deleteReview)


//admin access - if admin(use)
bookRouter.use(isAdmin)

bookRouter.post('/', postBooks)
bookRouter.put('/:bookId', updateBooks)
bookRouter.delete('/:bookId', deleteBooks)

module.exports = bookRouter