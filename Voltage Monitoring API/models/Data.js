const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DataSchema = new Schema({
    voltage: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true
    },
    ampere: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Data', DataSchema)