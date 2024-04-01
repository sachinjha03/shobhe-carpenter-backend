const express = require('express')
const User = require("../models/User")
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const secretKey = "WebsiteIsDesignedAndDevelopedBySachinJha"


router.post("/register" , async(req,res) => {
    try{
        const hashingPassword = await bcryptjs.hash(req.body.password , 10)
        const newUser = new User({
            email : req.body.email,
            password : hashingPassword ,
            admin : req.body.admin
        })
        const response = await newUser.save()
        res.status(200).json({"success":true , "data":response})
    }catch(err){
        res.status(500).json({"success":false , "reason" : err})
    }
})

router.post("/login" , async(req,res) => {
    try{
        const email = req.body.email
        const user = await User.findOne({email:email})
        if(!user){
            res.status(400).json({"success":false, "reason" : "USER NOT EXIST"})
        }else{
            const hashedPassword = await bcryptjs.compare(req.body.password , user.password)
            if(hashedPassword){
                const data = {
                    userId : user._id,
                    admin : user.admin
                }
                const token = jwt.sign(data , secretKey)
                res.status(200).json({"success":true , "data":user , token : token})
            }
            else{
                res.status(404).json({"success":false, "reason" : "PASSWORD INCORRECT"})
            }
        }
    }catch(err){
        res.status(500).json({"success":false , "reason" : err})
    }
})

module.exports = router;