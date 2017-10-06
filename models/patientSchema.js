var mongoose = require('mongoose')
var Schema = mongoose.Schema

var patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dis: {
        type: String,
        required: true,
    },
    med: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true

    }
})

const patient = mongoose.model('patientInfo', patientSchema)

module.exports = patient