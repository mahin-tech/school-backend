const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const Class = require('./class')
const Subject = require('./studentSubject')

const studentSubjectAssignSchema = new mongoose.Schema({
    class_id: {
        type: ObjectId,
        ref: Class,
        default: null
    },
    subject_id: {
        type: ObjectId,
        ref: Subject,
        default: null
    },
    full_mark: {
        type: String,
        default: null
    },
    pass_mark: {
        type: String,
        default: null
    },
    subjective_mark: {
        type: String,
        default: null
    },
},{timestamps: true})

module.exports = mongoose.model("StudentSubjectAssign", studentSubjectAssignSchema)