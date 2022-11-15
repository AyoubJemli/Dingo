const mongoose = require('mongoose'); // import mongoose

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    tel : String,
    role : String,
})
const users = mongoose.model("User",userSchema)

module.exports = users;