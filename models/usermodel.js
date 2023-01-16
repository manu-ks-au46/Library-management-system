const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({

    userName: {
    type: String,
    unique: true,
    minLength: 1,
    maxLength: 25,
    },
    email: {
    type: String,
    },
    password: {
    type: String,
    min: 1,
    max: 8,
    },
    isAdmin: {
    type: Boolean,
    default: false
    }
});

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel