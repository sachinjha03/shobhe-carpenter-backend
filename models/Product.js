const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image:String,
    name:String,
    description:String,
    price:Number,
    width:Number,
    height:Number
})

const productModel = new mongoose.model("Product" , productSchema)

module.exports = productModel;