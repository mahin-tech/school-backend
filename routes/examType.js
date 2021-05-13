const express = require('express')
const router = express.Router()

const {create, getAllExamType, getExamType, getExamTypeById, updateExamType, deleteExamType} = require('../controllers/examType')

router.param('examTypeId', getExamTypeById)

router.post('/create/student/exam/type', create)

router.get('/getAllExamType', getAllExamType)
router.get('/get/student/exam/type/:examTypeId', getExamType)

router.put('/update/student/exam/type/:examTypeId', updateExamType)

router.delete('/delete/student/exam/type/:examTypeId', deleteExamType)

module.exports = router