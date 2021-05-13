const express = require('express')
const router = express.Router()

const {create, getAllClass, getClass, getClassById, updateClass, deleteClass} = require('../controllers/class')

router.param('classId', getClassById)

router.post('/create/student/class', create)

router.get('/getAllStudentClass', getAllClass)
router.get('/get/student/class/:classId', getClass)

router.put('/update/student/class/:classId', updateClass)

router.delete('/delete/student/class/:classId', deleteClass)

module.exports = router