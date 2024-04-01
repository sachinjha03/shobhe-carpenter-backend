const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    query:String
})

const contactModel = new mongoose.model("Contact" , contactSchema)

module.exports = contactModel;