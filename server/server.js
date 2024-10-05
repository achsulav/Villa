const express = require("express")
const multer = require('multer');
const path = require("path");
const cors = require("cors")
const app = express();

const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,PATCH,DELETE",
    credentials:true,
};
app.use(cors(corsOption))
const Authrouter = require("./route/user-route")
const ProductRoute = require("./route/product-route")
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const ConnectDb = require("./utils/db")
app.use(express.json())

app.use("/api/auth", Authrouter)
app.use("/api/auth/products", ProductRoute); 

app.listen(3001)
ConnectDb();