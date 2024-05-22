const mongoose = require('mongoose');

let webSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
});

let Web = mongoose.model('web', webSchema);

module.exports = Web;