const express = require('express')
const router = express.Router()
const Product = require("../models/Product")

// ADD PRODUCT
router.post("/add-product", async (req, res) => {
    try {
        const newProduct = new Product({
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            width: req.body.width,
            height: req.body.height
        })
        const response = await newProduct.save()
        res.status(200).json({ "success": true, "data": response })
    } catch (err) {
        res.status(500).json({ "success": false, "reason": err })
    }
})

// READ PRODUCT
router.get("/read-product" , async(req,res) => {
    try{
        const response = await Product.find()
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// READ PARTICULAR PRODUCT
router.get("/read-product/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Product.find({_id:id})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})



// UPDATE PRODUCT
router.put("/update-product/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Product.findByIdAndUpdate({_id:id} , req.body , {new:true})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})


// DELETE PRODUCT
router.delete("/delete-product/:id" , async(req,res) => {
    const id = req.params.id
    try{
        const response = await Product.findByIdAndDelete({_id:id})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

module.exports = router;