const express = require('express')
const router = express.Router()

const {create, getAllFeeCategory, getFeeCategory, getFeeCategoryById, updateFeeCategory, deleteFeeCategory} = require('../controllers/feeCategory')

router.param('feeCategoryId', getFeeCategoryById)

router.post('/create/student/fee/category', create)

router.get('/getAllFeeCategory', getAllFeeCategory)
router.get('/get/student/fee/category/:feeCategoryId', getFeeCategory)

router.put('/update/student/fee/category/:feeCategoryId', updateFeeCategory)

router.delete('/delete/student/fee/category/:feeCategoryId', deleteFeeCategory)

module.exports = router