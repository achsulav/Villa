const mongoose = require("mongoose")
const User = require("../models/model-user")

const Login = async (req,res) => {
       const {email,password} = req.body;
       const userExist = await User.findOne({email: email})
       .then(user=>{
        if(user.password === password){
                res.json("Login Successfull")
        } else{
                res.json("Invalid Credintial")
        }
       })
        
}
module.exports = Login