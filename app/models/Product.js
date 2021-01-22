const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;