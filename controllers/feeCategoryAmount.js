const FeeCategoryAmount = require('../models/feeCategoryAmount')

// Get Id of Fee Category Amount
exports.getFeeCategoryAmountById = (req, res, next, id) => {
    try {
        FeeCategoryAmount.findById(id).exec((err, feeAmount) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category Amount Data not found"
                })
            }
            req.feeAmount = feeAmount
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Fee Category Amount
exports.create = async (req, res) => {
    try{
        const feeAmount = await new FeeCategoryAmount(req.body)
        feeAmount.save((err, feeAmount) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category Amount not able to save"
                })
            }
            res.json(feeAmount)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Fee Category Amount
exports.getFeeCategoryAmount = (req, res) => {
    try{
	   return res.json(req.feeAmount) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Fee Category Amount Data
exports.getAllFeeCategoryAmount = (req, res) => {
    try{
        FeeCategoryAmount.find().exec((err, feeAmounts) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category Amounts Data not found"
                })
            }
            res.json(feeAmounts)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Fee Category Amount Data
exports.updateFeeCategoryAmount = async (req, res) => {
    try{
        const feeCategoryAmount = await req.feeAmount
        feeCategoryAmount._id = req.body.id
        feeCategoryAmount.fee_category_id = req.body.fee_category_id
        feeCategoryAmount.class_id = req.body.class_id
        feeCategoryAmount.amount = req.body.amount
        feeCategoryAmount.save((err, feeAmount) => {
            if(err) {
                return res.status(400).json({
                    error: "Fee Category Amount not able to update"
                })
            }
            res.json(feeAmount)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Fee Category Amount Data
exports.deleteFeeCategoryAmount = (req, res) => {
    try{
        let feeCategoryAmount = req.feeAmount
        FeeCategoryAmount.deleteOne(feeCategoryAmount, (err, feeAmount) => {
            if(err) {
                return res.status(400).json({
                    error: "No Fee Category Amount found"
                })
            }
            if(feeAmount.ok === 1) {
                FeeCategoryAmount.find().exec((err, feeAmounts) => {
                    if(err) {
                        return res.status(400).json({
                            error: "Fee Category Amounts Data not found"
                        })
                    }
                    res.json(feeAmounts)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}