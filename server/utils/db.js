const mongoose = require("mongoose")
const uri = "mongodb+srv://mern-sulav:pll9gcvug@mern-sulav.bgmb61k.mongodb.net/DellMernstack?retryWrites=true&w=majority&appName=Mern-Sulav"
const ConnectDb = async() =>{

try {
        await mongoose.connect(uri)
        console.log("Connenction successfull")
    } catch (error) {
        console.error("Database connection failed")
        process.exit(0);
    }
    
};

module.exports = ConnectDb;