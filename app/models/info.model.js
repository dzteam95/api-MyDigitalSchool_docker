const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Info', InfoSchema);