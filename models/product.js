const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    webUrl: {
        type: String,
        required: true,
        trim: true
    },
    web: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'web',
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
