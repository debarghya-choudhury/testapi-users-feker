const express = require('express')

const router = express.Router()

// 2) Route Handlers
const { showHome, createUser, assignTicket } = require('./../controller/userController')

// Routes :-

router  
    .route('/')
    .get(showHome)

router
    .route('/register')
    .post(createUser)

router  
    .route('/assign-ticket')
    .post(assignTicket)

module.exports = router