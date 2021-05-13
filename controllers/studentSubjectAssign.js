const StudentSubjectAssign = require('../models/studentSubjectAssign')

// Get Id of Student Subject Assign
exports.getStudentSubjectAssignById = (req, res, next, id) => {
    try {
        StudentSubjectAssign.findById(id).exec((err, assignSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject Assign Data not found"
                })
            }
            req.assignSubject = assignSubject
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Subject Assign Data
exports.create = async (req, res) => {
    try{
        const studentSubjectAssign = await new StudentSubjectAssign(req.body)
        studentSubjectAssign.save((err, assignSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject not able to save"
                })
            }
            res.json(assignSubject)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Student Subject Assign Data
exports.getStudentSubjectAssign = (req, res) => {
    try{
	   return res.json(req.assignSubject) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Subject Assign Data
exports.getAllStudentSubjectAssign = (req, res) => {
    try{
        StudentSubjectAssign.find().exec((err, assignSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "All Studetn Subject Data not found"
                })
            }
            res.json(assignSubject)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Subject Assign Data
exports.updateStudentSubjectAssign = async (req, res) => {
    try{
        const studentSubjectAssign = await req.assignSubject
        studentSubjectAssign._id = req.body.id
        studentSubjectAssign.class_id = req.body.class_id
        studentSubjectAssign.subject_id = req.body.subject_id
        studentSubjectAssign.full_mark = req.body.full_mark
        studentSubjectAssign.pass_mark = req.body.pass_mark
        studentSubjectAssign.subjective_mark = req.body.subjective_mark
        studentSubjectAssign.save((err, assignSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject not able to update"
                })
            }
            res.json(assignSubject)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Subject Assign Data
exports.deleteStudentSubjectAssign = (req, res) => {
    try{
        let studentSubjectAssign = req.assignSubject
        StudentSubjectAssign.deleteOne(studentSubjectAssign, (err, assignSubject) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Subject Data not found"
                })
            }
            if(assignSubject.ok === 1) {
                StudentSubjectAssign.find().exec((err, assignSubject) => {
                    if(err) {
                        return res.status(400).json({
                            error: "All Student Subject Data not found"
                        })
                    }
                    res.json(assignSubject)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}