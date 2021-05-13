const mongoose = require('mongoose')

const studentGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("StudentGroup", studentGroupSchema)