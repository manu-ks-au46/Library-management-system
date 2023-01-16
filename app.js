const express = require('express')
const connectDB = require('./dbConfig')
const cookieParser = require('cookie-parser')
const path = require('path');
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')

const bookRouter = require('./routes/bookRouter')
const userRouter = require('./routes/userRouter')


//library for secret credentials from dot env library
dotenv.config()

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

//app.use(fileUpload())//fileupload
app.use(cookieParser())//cookie
app.use(express.static('public'))

//universal route
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname+'/index.html'));  
})

//route middlewares
app.use('/books', bookRouter)
app.use('/users',userRouter)

const PORT =process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(!err){
    console.log(`server is running and listening to port no : ${PORT}`)
    connectDB();
    }else{
    console.log(`server is not running on port no : ${PORT}`)   
    }
})