const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    emp_name: {
        type: String,
        required: true
    },
    emp_password: {
        type: String,
        required: true
    },
    emp_mobile: {
        type: String,
        unique: true,
        required: true
    },
    emp_email: {
        type: String,
        unique: true,
        required: true
    },
    emp_designation: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)