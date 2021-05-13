const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const FeeCategory = require('./feeCategory')
const Class = require('./class')

const feeCategoryAmountSchema = new mongoose.Schema({
    fee_category_id: {
        type: ObjectId,
        ref: FeeCategory,
        default: null
    },
    class_id: {
        type: ObjectId,
        ref: Class,
        default: null
    },
    amount: {
        type: String,
        default: null
    }
},{timestamps: true})

module.exports = mongoose.model("FeeCategoryAmount", feeCategoryAmountSchema)