const mongoose = require('mongoose')

const studentShiftSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("StudentShift", studentShiftSchema)