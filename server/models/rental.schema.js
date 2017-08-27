var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema({
    rent: {type: Number, required: true},
    sqft: {type: Number, required: true},
    city: {type: String, required: true},
});

module.exports = mongoose.model('Rentals', rentalSchema);