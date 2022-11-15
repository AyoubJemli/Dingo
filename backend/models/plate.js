const mongoose = require('mongoose'); // import mongoose

const plateSchema = mongoose.Schema({
    plateName : String,
    price : String,
    description : String,
})
const plates = mongoose.model("plate",plateSchema)

module.exports = plates;