const mongoose = require('mongoose')

const examTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("ExamType", examTypeSchema)