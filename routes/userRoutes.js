const express = require('express')

const router = express.Router()

// 2) Route Handlers
const { showHome, createUser } = require('./../controller/userController')

// Routes :-

router  
    .route('/')
    .get(showHome)

router
    .route('/register')
    .post(createUser)


module.exports = router