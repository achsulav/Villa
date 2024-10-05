const express= require("express")
const router = express.Router()
const Home = require("../controller/home")
const About= require("../controller/about")
const Register= require("../controller/register")
const Login = require("../controller/login")
router.route("/").get(Home)
router.route("/about").get(About)
router.route("/register").post(Register)
router.route("/login").post(Login)

module.exports = router;