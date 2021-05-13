const StudentSubject = require('../models/studentSubject')

// Get Id of Student Subject
exports.getStudentSubjectById = (req, res, next, id) => {
    try {
        StudentSubject.findById(id).exec((err, subject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject Data not found"
                })
            }
            req.subject = subject
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Subject
exports.create = async (req, res) => {
    try{
        const studentSubject = await new StudentSubject(req.body)
        studentSubject.save((err, studentSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject not able to save"
                })
            }
            res.json(studentSubject)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Fee Student Subject
exports.getStudentSubject = (req, res) => {
    try{
	   return res.json(req.subject) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Subject
exports.getAllStudentSubject = (req, res) => {
    try{
        StudentSubject.find().exec((err, subject) => {
            if(err) {
                return res.status(400).json({
                    error: "All Studetn Subject Data not found"
                })
            }
            res.json(subject)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Subject
exports.updateStudentSubject = async (req, res) => {
    try{
        const studentSubject = await req.subject
        studentSubject._id = req.body.id
        studentSubject.name = req.body.name
        studentSubject.save((err, subject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject not able to update"
                })
            }
            res.json(subject)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Subject Data
exports.deleteStudentSubject = (req, res) => {
    try{
        let studentSubject = req.subject
        StudentSubject.deleteOne(studentSubject, (err, subject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject Data not found"
                })
            }
            if(subject.ok === 1) {
                StudentSubject.find().exec((err, subject) => {
                    if(err) {
                        return res.status(400).json({
                            error: "All Student Subject Data not found"
                        })
                    }
                    res.json(subject)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}