const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    products: [productSchema],
    total: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    paidAt: {
        type: Date
    }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
