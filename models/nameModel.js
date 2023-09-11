const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const Name = mongoose.model('Name', nameSchema);
module.exports = Name;