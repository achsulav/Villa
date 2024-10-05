const About = (req,res) =>{
    try {
        res.send("Welcome From controller")
    } catch (error) {
        console.log(error)
    }
}

module.exports = About;