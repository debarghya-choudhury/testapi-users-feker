const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  emp_name: String,
  emp_password: String,
  emp_mobile: {
    type: String,
    unique: true
    // unique: [true, 'User already registered.']
    // {
    //     status: 'success',
    //     message: 'User already registered.'
    // }]
  },
  emp_email: {
    type: String,
    unique: true
    // unique: [true, 'User already registered.']
    // unique: [true, {
    //     status: 'success',
    //     message: 'User already registered.'
    // }]
  },
  emp_designation: String
})

module.exports = mongoose.model('User', userSchema)