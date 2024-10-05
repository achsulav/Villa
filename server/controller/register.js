const mongoose = require("mongoose")
const User = require("../models/model-user")
const Register =  async(req,res) => {
    
        
       const {username,email,phone,password} = req.body||{};
       
        console.log(req.body);
        const UserExist = await User.findOne({email});

        if(UserExist){
         return res.status(400).json("email already exist")
        }

        const UserCreated = await User.create({username,email,password,phone})
        res.json({username,email,phone,password})


};



module.exports = Register;