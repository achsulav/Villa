const express = require('express');
const { createProduct, getProducts } = require('../controller/product'); // Adjust the path as needed
const multer = require('multer');

const router = express.Router();

// Configure multer for image uploads
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads'); // Directory where the images will be saved
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Unique filename
        }
    })
});

// Route to create a new product
router.post('/add', upload.single('user_file'), createProduct);

// Route to get all products
router.get('/', getProducts);

module.exports = router;
