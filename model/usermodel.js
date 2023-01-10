const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  emp_name: String,
  emp_password: String,
  emp_mobile: {
    type: String,
    unique: true
  },
  emp_email: {
    type: String,
    unique: true
  },
  emp_designation: String
})

module.exports = mongoose.model('User', userSchema)