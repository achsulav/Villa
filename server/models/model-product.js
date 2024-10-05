const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: String , required: true }, // You might want to store this as a string for units
    floor: { type: Number, required: true  },
    parking: { type: String, required: true  }, // e.g., "2 spots"
    
});

module.exports = mongoose.model('Product', productSchema);
