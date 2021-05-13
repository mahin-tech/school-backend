const express = require('express')
const router = express.Router()

const {create, getAllYear, getYear, getYearById, updateYear, deleteYear} = require('../controllers/studentYear')

router.param('yearId', getYearById)

router.post('/create/student/year', create)

router.get('/getAllStudentYear', getAllYear)
router.get('/get/student/year/:yearId', getYear)

router.put('/update/student/year/:yearId', updateYear)

router.delete('/delete/student/year/:yearId', deleteYear)

module.exports = router