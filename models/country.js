const mongoose = require('mongoose');

let countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

let Country = mongoose.model('country', countrySchema);

module.exports = Country;