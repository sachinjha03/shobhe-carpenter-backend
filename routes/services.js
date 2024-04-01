const express = require('express')
const Service = require("../models/Service")
const router = express.Router()

// ADD SERVICE
router.post("/add-service" , async(req,res) => {
    try{
        const newService = new Service({
            image:req.body.image,
            name:req.body.name,
            description:req.body.description
        })
        const response = await newService.save()
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
        console.log(err);
    }
})

// READ SERVICES
router.get("/read-services" , async(req,res) => {
    try{
        const response = await Service.find()
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// READ PARTICULAT SERVICES
router.get("/read-service/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Service.find({_id:id})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// UPDATE SERVICE
router.put("/update-service/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Service.findByIdAndUpdate({_id:id} , req.body , {new:true})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// DELETE SERVICE
router.delete("/delete-service/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Service.findByIdAndDelete({_id:id})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

module.exports = router;