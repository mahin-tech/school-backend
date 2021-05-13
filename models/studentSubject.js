const mongoose = require('mongoose')

const studentSubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("StudentSubject", studentSubjectSchema)