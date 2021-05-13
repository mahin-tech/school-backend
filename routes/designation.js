const express = require('express')
const router = express.Router()

const {create, getAllDesignation, getDesignation, getDesignationById, updateDesignation, deleteDesignation} = require('../controllers/designation')

router.param('designationId', getDesignationById)

router.post('/create/designation', create)

router.get('/getAllDesignation', getAllDesignation)
router.get('/get/designation/:designationId', getDesignation)

router.put('/update/designation/:designationId', updateDesignation)

router.delete('/delete/designation/:designationId', deleteDesignation)

module.exports = router