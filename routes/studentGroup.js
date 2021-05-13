const express = require('express')
const router = express.Router()

const {create, getAllGroup, getGroup, getGroupById, updateGroup, deleteGroup} = require('../controllers/studentGroup')

router.param('groupId', getGroupById)

router.post('/create/student/group', create)

router.get('/getAllStudentGroup', getAllGroup)
router.get('/get/student/group/:groupId', getGroup)

router.put('/update/student/group/:groupId', updateGroup)

router.delete('/delete/student/group/:groupId', deleteGroup)

module.exports = router