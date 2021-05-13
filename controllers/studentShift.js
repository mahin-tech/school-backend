const StudentShift = require('../models/studentShift')

// Get Id of Student Shift
exports.getShiftById = (req, res, next, id) => {
    try {
        StudentShift.findById(id).exec((err, shift) => {
            if(err) {
                return res.status(400).json({
                    error: "StudentShift not found"
                })
            }
            req.shift = shift
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Shift
exports.create = async (req, res) => {
    try{
        const shift = await new StudentShift(req.body)
        shift.save((err, shift) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Shift not able to save"
                })
            }
            res.json(shift)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Student Shift data
exports.getShift = (req, res) => {
    try{
	   return res.json(req.shift) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Shift Data
exports.getAllShift = (req, res) => {
    try{
        StudentShift.find().exec((err, shifts) => {
            if(err) {
                return res.status(400).json({
                    error: "No Shifts found"
                })
            }
            res.json(shifts)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Shift Data
exports.updateShift = async (req, res) => {
    try{
        const studentShift = await req.shift
        studentShift._id = req.body.id
        studentShift.name = req.body.name
        studentShift.save((err, shift) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Shift not able to update"
                })
            }
            res.json(shift)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Shift Data
exports.deleteShift = (req, res) => {
    try{
        let studentShift = req.shift
        StudentShift.deleteOne(studentShift, (err, shift) => {
            if(err) {
                return res.status(400).json({
                    error: "No year found"
                })
            }
            if(shift.ok === 1) {
                StudentShift.find().exec((err, shifts) => {
                    if(err) {
                        return res.status(400).json({
                            error: "No Shifts found"
                        })
                    }
                    res.json(shifts)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}