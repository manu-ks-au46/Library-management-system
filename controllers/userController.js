const UserModel = require('../models/usermodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const SECRET_KEY = process.env.SECRET_KEY;


//signup user

const signup = async(req,res)=>{

    const {userName,email,password,confirmPassword} = req.body

    try {

        if (password != confirmPassword) {
            res.status(400).send({ status: 'error', msg: "Password/Confirm Password are not same" })
          }

        const protectedPassword = await bcrypt.hash(password,4) //encrypting password with bcrypt 4 times 

        const newUser = await UserModel.create({userName,email,password : protectedPassword})  
        res.status(200).send({ status: 'success', user: { userName: newUser.name, email: newUser.email } })
    
    } catch (error) {
        res.status(500).send({ status: 'error',error,msg:'internal server error'})
    }
}

//user login

const login = async(req,res)=>{
    const {email,password} = req.body

    try {
        const loggedInUser = await UserModel.findOne({email},{email:1,password:1,isAdmin:1})
        if(!loggedInUser){
            res.status(404).send({ status: 'error', msg: "User not found" })
            return
        }else{

        const isPasswordMatch = await bcrypt.compare(password, loggedInUser.password)
        if (!isPasswordMatch) {
        res.status(400).send({ status: 'error', msg: "Password Incorrect" })
       return
       }
    }

       const userPayload = { email, isAdmin: loggedInUser.isAdmin }
       //Generate the token
       const token = jwt.sign(userPayload, process.env.SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
       res.cookie('jwt', token)
    //    res.redirect('http://localhost:3000/signup')
       res.send({ status: 'success', msg: 'User Logged in Successfully' })
      } catch (error) {
        res.status(500).send({ status: 'error', error, msg: "Internal Server Error" })
        
    }
}

//user logout

const logout = (req,res)=>{
  res.cookie('jwt', '', { maxAge: 1 })
  res.send({ status: 'success', msg: 'Logged Out Successfully' })
}

module.exports = {
    signup,
    login,
    logout, 
    SECRET_KEY
}




