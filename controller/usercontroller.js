const mongoose = require('mongoose')

// Importing User model
const User = require('./../model/userModel')

const showHome = (req, res) => {
    res.status(200).send('users-api-feker home page')
}

const createUser = async (req, res) => {
    try {
        const {
            emp_name,
            emp_password,
            emp_mobile,
            emp_email,
            emp_designation
        } = req.body

        const newUser = new User(req.body)
        await newUser.save()
        // console.log(emp_name, emp_password, emp_mobile,
        //     emp_email, emp_designation)
        res.status(201).json({
            status: 'success',
            message: 'New user registered successfully.'
        })        
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'User already registered.'
        })
    }
}

module.exports = {
    showHome,
    createUser
}