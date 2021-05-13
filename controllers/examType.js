const ExamType = require('../models/examType')

// Get Id of Exam Type
exports.getExamTypeById = (req, res, next, id) => {
    try {
        ExamType.findById(id).exec((err, exam) => {
            if(err) {
                return res.status(400).json({
                    error: "Exam Type Data not found"
                })
            }
            req.exam = exam
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Exam Type
exports.create = async (req, res) => {
    try{
        const examType = await new ExamType(req.body)
        examType.save((err, examType) => {
            if(err) {
                return res.status(400).json({
                    error: "Exam Type not able to save"
                })
            }
            res.json(examType)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Exam Type
exports.getExamType = (req, res) => {
    try{
	   return res.json(req.exam) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Exam Type
exports.getAllExamType = (req, res) => {
    try{
        ExamType.find().exec((err, exam) => {
            if(err) {
                return res.status(400).json({
                    error: "All Exam Type Data not found"
                })
            }
            res.json(exam)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Exam Type
exports.updateExamType = async (req, res) => {
    try{
        const examType = await req.exam
        examType._id = req.body.id
        examType.name = req.body.name
        examType.save((err, exam) => {
            if(err) {
                return res.status(400).json({
                    error: "Exam Type not able to update"
                })
            }
            res.json(exam)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Exam Type
exports.deleteExamType = (req, res) => {
    try{
        let examType = req.exam
        ExamType.deleteOne(examType, (err, exam) => {
            if(err) {
                return res.status(400).json({
                    error: "Exam Type Data not found"
                })
            }
            if(exam.ok === 1) {
                ExamType.find().exec((err, exam) => {
                    if(err) {
                        return res.status(400).json({
                            error: "All Exam Type Data not found"
                        })
                    }
                    res.json(exam)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}