const mongoose = require('mongoose');
const dotenv = require('dotenv')

async function connectDB() {
  try {
    
    await mongoose.connect(process.env.MONGO_URL,{dbName: "Library"})
    console.log("DB Connection Successful")
  } catch (error) {
    console.log("Error Connecting to DB")
    process.exit()
  }
}

module.exports = connectDB