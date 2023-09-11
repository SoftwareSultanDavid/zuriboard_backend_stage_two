const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    person: {
        type: String,
        required: true
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;