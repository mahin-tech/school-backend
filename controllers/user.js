const User = require('../models/user')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

//Create Signup Data
exports.signup = async(req, res) => {
    try{
        const errors = validationResult(req)
        const user = await new User(req.body)
        user.image = req.file.filename
        if(!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg
            })
        }
        user.save((err, user) => {
            if(err) {
                return res.status(400).json({
                    error: "User not able to save"
                })
            }
            res.json(user)
        })
    }catch(err){
        console.log(err)
    }
}

//Create Login Data
exports.signin = (req, res) => {
    try {
        const errors = validationResult(req);
        const { email, password } = req.body;
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg,
            });
        }
        
        User.findOne({ email }, (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "User email does not exist",
                });
            }

            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            res.cookie("token", token, { expire: new Date() + 9999 });

            const { _id, name, email, address, mobile, image } = user;
            return res.json({
                token,
                user: { _id, name, email, address, mobile, image }
            });
        });
    } catch (error) {
        console.log(error);
    }
};
