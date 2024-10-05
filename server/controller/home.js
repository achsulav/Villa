const Home = async (req,res) =>{
    try {
        res.send("Welcome From controller")
    } catch (error) {
        console.log(error)
    }
}

module.exports = Home;