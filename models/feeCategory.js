const mongoose = require('mongoose')

const feeCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("FeeCategory", feeCategorySchema)