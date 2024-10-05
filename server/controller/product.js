const Product = require('../models/model-product');

// Create a new product
const createProduct = async (req, res) => {
    try {
        // Ensure the file was uploaded
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        // Get product details from request body
        const { type, price, address, bedrooms, bathrooms, area, floor, parking } = req.body;

        // Create a new product
        const newProduct = new Product({
            image: req.file.path,
            type,
           
            price,
            address,
            bedrooms,
            bathrooms,
            area,
            floor,
            parking,
        });

        // Save the product to the database
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating product' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json(products); // Return products as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products' });
    }
};

module.exports = { createProduct, getProducts };
