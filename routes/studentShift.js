const express = require('express')
const router = express.Router()

const {create, getAllShift, getShift, getShiftById, updateShift, deleteShift} = require('../controllers/studentShift')

router.param('shiftId', getShiftById)

router.post('/create/student/shift', create)

router.get('/getAllStudentShift', getAllShift)
router.get('/get/student/shift/:shiftId', getShift)

router.put('/update/student/shift/:shiftId', updateShift)

router.delete('/delete/student/shift/:shiftId', deleteShift)

module.exports = router