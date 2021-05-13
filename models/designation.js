const mongoose = require('mongoose')

const designationSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("Designation", designationSchema)