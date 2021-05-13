const express = require('express')
const router = express.Router()

const {
    create, 
    getAllStudentSubjectAssign, 
    getStudentSubjectAssign, 
    getStudentSubjectAssignById, 
    updateStudentSubjectAssign, 
    deleteStudentSubjectAssign
} = require('../controllers/studentSubjectAssign')

router.param('studentSubjectAssignId', getStudentSubjectAssignById)

router.post('/create/student/subject/assign', create)

router.get('/getAllStudentSubjectAssign', getAllStudentSubjectAssign)
router.get('/get/student/subject/assign/:studentSubjectAssignId', getStudentSubjectAssign)

router.put('/update/student/subject/assign/:studentSubjectAssignId', updateStudentSubjectAssign)

router.delete('/delete/student/subject/assign/:studentSubjectAssignId', deleteStudentSubjectAssign)

module.exports = router