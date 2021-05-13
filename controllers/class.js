const Class = require('../models/class')

// Get Id of Student Class
exports.getClassById = (req, res, next, id) => {
    try {
        Class.findById(id).exec((err, student) => {
            if(err) {
                return res.status(400).json({
                    error: "Class not found"
                })
            }
            req.student = student
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Class
exports.create = async (req, res) => {
    try{
        const student = await new Class(req.body)
        student.save((err, student) => {
            if(err) {
                return res.status(400).json({
                    error: "Student not able to save"
                })
            }
            res.json(student)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Student Class data
exports.getClass = (req, res) => {
    try{
	   return res.json(req.student) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Class Data
exports.getAllClass = (req, res) => {
    try{
        Class.find().exec((err, students) => {
            if(err) {
                return res.status(400).json({
                    error: "No students found"
                })
            }
            res.json(students)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Class Data
exports.updateClass = async (req, res) => {
    try{
        const studentClass = await req.student
        studentClass._id = req.body.id
        studentClass.name = req.body.name
        studentClass.save((err, student) => {
            if(err) {
                return res.status(400).json({
                    error: "Student not able to save"
                })
            }
            res.json(student)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Class Data
exports.deleteClass = (req, res) => {
    try{
        let studentClass = req.student
        Class.deleteOne(studentClass, (err, student) => {
            if(err) {
                return res.status(400).json({
                    error: "No student found"
                })
            }
            res.send('Class details deleted successfully')
        })
    } catch(error) {
        console.log(error)
    }
}