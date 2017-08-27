var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    cost: {type: Number, required: true},
    sqft: {type: Number, required: true},
    city: {type: String, required: true},
});

module.exports = mongoose.model('Listings', listingSchema);