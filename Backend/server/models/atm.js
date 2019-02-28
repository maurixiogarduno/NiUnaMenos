const mongoose = require('mongoose');
const { Schema } = mongoose;

const AtmSchema = new Schema({
    Identification: { type: String, required: true},
    Name: { type: String, required: false },
    Latitude: { type: String, required: false },
    Longitude: { type: String, required: false}
});

module.exports = mongoose.model('ATM', AtmSchema);