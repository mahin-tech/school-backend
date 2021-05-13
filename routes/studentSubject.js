const express = require('express')
const router = express.Router()

const {
    create, 
    getAllStudentSubject, 
    getStudentSubject, 
    getStudentSubjectById, 
    updateStudentSubject, 
    deleteStudentSubject
} = require('../controllers/studentSubject')

router.param('studentSubjectId', getStudentSubjectById)

router.post('/create/student/subject', create)

router.get('/getAllStudentSubject', getAllStudentSubject)
router.get('/get/student/subject/:studentSubjectId', getStudentSubject)

router.put('/update/student/subject/:studentSubjectId', updateStudentSubject)

router.delete('/delete/student/subject/:studentSubjectId', deleteStudentSubject)

module.exports = router