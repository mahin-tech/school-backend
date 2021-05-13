const mongoose = require('mongoose')
const crypto = require('crypto');
const { v1: uuidv1} = require('uuid');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    encry_password: {
        type: String,
        trim: true,
        required: true
    },
    usertype: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    },
    address: {
        type: String,
        default: null
    },
    mobile: {
        type: Number,
        default: null
    },
    image: {
        type: String,
        default: null
    }
},{timestamps: true})

userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password)
    })
    .get(function() {
        return this._password
    })

userSchema.methods = {
    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },
    securePassword: function(plainPassword) {
        if(!plainPassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex')
        } catch (err) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema)