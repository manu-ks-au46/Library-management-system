const {Router} = require('express')
const{signup,login,logout} = require('../controllers/userController')

const userRouter = new Router()

//routes for user signup,login,logout

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.post('/logout', logout)

module.exports = userRouter



