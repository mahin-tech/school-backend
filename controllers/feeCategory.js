const FeeCategory = require('../models/feeCategory')

// Get Id of Fee Category
exports.getFeeCategoryById = (req, res, next, id) => {
    try {
        FeeCategory.findById(id).exec((err, fee) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category not found"
                })
            }
            req.fee = fee
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Fee Category
exports.create = async (req, res) => {
    try{
        const fee = await new FeeCategory(req.body)
        fee.save((err, fee) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category not able to save"
                })
            }
            res.json(fee)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Fee Category data
exports.getFeeCategory = (req, res) => {
    try{
	   return res.json(req.fee) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Fee Category Data
exports.getAllFeeCategory = (req, res) => {
    try{
        FeeCategory.find().exec((err, fees) => {
            if(err) {
                return res.status(400).json({
                    error: "No Fees found"
                })
            }
            res.json(fees)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Fee Category Data
exports.updateFeeCategory = async (req, res) => {
    try{
        const feeCategory = await req.fee
        feeCategory._id = req.body.id
        feeCategory.name = req.body.name
        feeCategory.save((err, fee) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category not able to update"
                })
            }
            res.json(fee)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Fee Category Data
exports.deleteFeeCategory = (req, res) => {
    try{
        let feeCategory = req.fee
        FeeCategory.deleteOne(feeCategory, (err, fee) => {
            if(err) {
                return res.status(400).json({
                    error: "No fee found"
                })
            }
            if(fee.ok === 1) {
                FeeCategory.find().exec((err, fees) => {
                    if(err) {
                        return res.status(400).json({
                            error: "No Fees found"
                        })
                    }
                    res.json(fees)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}