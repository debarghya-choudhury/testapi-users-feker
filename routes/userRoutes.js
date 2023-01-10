const express = require('express')

const router = express.Router()

// 2) Route Handlers
const { showHome, createUser, assignTicket, showUserTickets } = require('./../controller/userController')

// Routes :-

router  
    .route('/')
    .get(showHome)

// 1st api route
router
    .route('/register')
    .post(createUser)

// 2nd api route    
router  
    .route('/assign-ticket')
    .post(assignTicket)

// 3rd api route
router
    .route('/tickets')
    .post(showUserTickets)


module.exports = router