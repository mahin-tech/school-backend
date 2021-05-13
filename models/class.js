const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("StudentClass", classSchema)