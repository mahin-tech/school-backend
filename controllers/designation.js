const Designation = require('../models/designation')

// Get Id of Designation
exports.getDesignationById = (req, res, next, id) => {
    try {
        Designation.findById(id).exec((err, designation) => {
            if(err) {
                return res.status(400).json({
                    error: "Designation Data not found"
                })
            }
            req.designation = designation
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Designation
exports.create = async (req, res) => {
    try{
        const designation = await new Designation(req.body)
        designation.save((err, designation) => {
            if(err) {
                return res.status(400).json({
                    error: "Designation not able to save"
                })
            }
            res.json(designation)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Designation
exports.getDesignation = (req, res) => {
    try{
	   return res.json(req.designation) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Designation
exports.getAllDesignation = (req, res) => {
    try{
        Designation.find().exec((err, designation) => {
            if(err) {
                return res.status(400).json({
                    error: "Designation Data not found"
                })
            }
            res.json(designation)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Designation
exports.updateDesignation = async (req, res) => {
    try{
        const designation = await req.designation
        designation._id = req.body.id
        designation.name = req.body.name
        designation.save((err, designation) => {
            if(err) {
                return res.status(400).json({
                    error: "Designation not able to update"
                })
            }
            res.json(designation)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Designation
exports.deleteDesignation = (req, res) => {
    try{
        let designation = req.designation
        Designation.deleteOne(designation, (err, designation) => {
            if(err) {
                return res.status(400).json({
                    error: "Designation Data not found"
                })
            }
            if(designation.ok === 1) {
                Designation.find().exec((err, designation) => {
                    if(err) {
                        return res.status(400).json({
                            error: "All Designation Data not found"
                        })
                    }
                    res.json(designation)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}