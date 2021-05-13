const mongoose = require('mongoose')

const studentYearSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("StudentYear", studentYearSchema)