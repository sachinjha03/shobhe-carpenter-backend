const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// POST USER QUERY
router.post("/send-query" , async(req,res) => {
    try{
        const sendQuery = new Contact({
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            query:req.body.query,
        })
        const response = await sendQuery.save()
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// READ USER QUERY
router.get("/read-query" , async(req,res) => {
    try{
        const response = await Contact.find()
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

// DELETE USER QUERY
router.delete("/delete-query/:id" , async(req,res) => {
    try{
        const id = req.params.id
        const response = await Contact.findByIdAndDelete({_id:id})
        res.status(200).json({"success":true,"data":response})
    }catch(err){
        res.status(500).json({"success":false,"reason":err})
    }
})

module.exports = router;