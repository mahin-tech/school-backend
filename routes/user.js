const express = require('express')
const router = express.Router()
const multer = require('multer')
let { check } = require('express-validator')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload')
    },
    filename: (req, file, cb) => {
        let filetype = ''
        if (file.mimetype === 'image/gif') {
            filetype = 'gif'
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png'
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg'
        }
        cb(null, 'image-' + Date.now() + '.' + filetype)
    }
})

let upload = multer({ storage: storage })

const { signup, signin } = require('../controllers/user')

router.post(
    '/signup',
    upload.single('image'),
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be 8 characters long').isLength({ min: 8 })
    ], 
    signup
)

router.post('/signin', signin)

module.exports = router