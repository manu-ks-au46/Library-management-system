const BookModel = require('../models/bookModel')
const cloudinary= require('cloudinary').v2
const Base64 = require('js-base64')//package to convert image buffer
//cloudinary configuration
cloudinary.config({
    cloud_name: "dl00tnu35",
    api_key: "852548559436726",
    api_secret: "Mmhjx1kQXdZw-QQaXwYInqMgxIk"
  });
  
//get all books

const getBooks = async(req,res) => {
    try {
        const books = await BookModel.find()
        res.status(200).send({status : 'success',books})
    } catch (error) {
        res.status(404).send({status : 'error',error})
    }

}

//get book by id


const getBooksbyId = async (req,res) => {
    const {bookId} = req.params

    try {
        const book = await BookModel.findById(bookId).populate('reviews')
        if(book){
            res.status(200).send({status : 'success',book})
        }else{
            res.status(404).send({status : 'error',msg:'book not found'})
        }
        
    } catch (error) {
        res.status(404).send({status : 'error',book})
    }

}

//create


const postBooks = async (req,res) => {
const bookData = req.body

try {
    if (req.files && Object.keys(req.files).length > 0) {
        const fileData = req.files.image
  
        //converting binary data to Base64 String
        const base64EncodedData = Base64.encode(fileData.data)
  
        //upload to cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64EncodedData}`)
        console.log(cloudinaryResponse);
        bookData.imageUrl = cloudinaryResponse.secure_url
      }
      
      
    const data = await BookModel.create(bookData)
    res.status(201).send({status : 'success',msg:'Book added successfully to Database' ,book:data})
   } catch (error) {
    res.status(500).send({status : 'error',msg:'error adding book to Database' ,error})
   }
}

//update

const updateBooks = async (req,res) => {
    const {bookId} = req.params
    const updatedBookData = req.body

    try {
        const updatedBook = await BookModel.findByIdAndUpdate(bookId,updatedBookData)//validation required
        res.status(201).send({status : 'success',msg:'Book updated successfully' ,book:updatedBook})
    } catch (error) {
        res.status(500).send({status : 'error',msg:'error updating book' ,error})
    }

}

//delete

const deleteBooks = async (req,res) => {
    const {bookId} = req.params
    try {
        await BookModel.findByIdAndDelete(bookId)
        res.status(201).send({status : 'success',msg:'Book deleted successfully'})
    } catch (error) {
        res.status(500).send({status : 'error',msg:'error deleting book from database'}) 
    }   


}
module.exports = {
    getBooks,
    getBooksbyId,
    postBooks,
    updateBooks,
    deleteBooks,
}