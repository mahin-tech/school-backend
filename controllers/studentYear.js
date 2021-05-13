const StudentYear = require('../models/studentYear')

// Get Id of Student Year
exports.getYearById = (req, res, next, id) => {
    try {
        StudentYear.findById(id).exec((err, year) => {
            if(err) {
                return res.status(400).json({
                    error: "StudentYear not found"
                })
            }
            req.year = year
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Year
exports.create = async (req, res) => {
    try{
        const year = await new StudentYear(req.body)
        year.save((err, year) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Year not able to save"
                })
            }
            res.json(year)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Student Year data
exports.getYear = (req, res) => {
    try{
	   return res.json(req.year) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Year Data
exports.getAllYear = (req, res) => {
    try{
        StudentYear.find().exec((err, years) => {
            if(err) {
                return res.status(400).json({
                    error: "No years found"
                })
            }
            res.json(years)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Year Data
exports.updateYear = async (req, res) => {
    try{
        const studentYear = await req.year
        studentYear._id = req.body.id
        studentYear.name = req.body.name
        studentYear.save((err, year) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Year not able to update"
                })
            }
            res.json(year)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Year Data
exports.deleteYear = (req, res) => {
    try{
        let studentYear = req.year
        StudentYear.deleteOne(studentYear, (err, year) => {
            if(err) {
                return res.status(400).json({
                    error: "No year found"
                })
            }
            res.send('Student Year details deleted successfully')
        })
    } catch(error) {
        console.log(error)
    }
}