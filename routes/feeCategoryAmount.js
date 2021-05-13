const express = require('express')
const router = express.Router()

const {
    create, 
    getAllFeeCategoryAmount, 
    getFeeCategoryAmount, 
    getFeeCategoryAmountById, 
    updateFeeCategoryAmount, 
    deleteFeeCategoryAmount
} = require('../controllers/feeCategoryAmount')

router.param('feeCategoryAmountId', getFeeCategoryAmountById)

router.post('/create/student/fee/category/amount', create)

router.get('/getAllFeeCategoryAmount', getAllFeeCategoryAmount)
router.get('/get/student/fee/category/amount/:feeCategoryAmountId', getFeeCategoryAmount)

router.put('/update/student/fee/category/amount/:feeCategoryAmountId', updateFeeCategoryAmount)

router.delete('/delete/student/fee/category/amount/:feeCategoryAmountId', deleteFeeCategoryAmount)

module.exports = router