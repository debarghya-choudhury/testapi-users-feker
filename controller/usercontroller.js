const mongoose = require('mongoose')

// Importing User model
const User = require('./../model/userModel')

// Importing Ticket model
const Ticket = require('./../model/ticketModel')

const showHome = (req, res) => {
    res.status(200).send('users-api-feker home page')
}


// Controllers
// 1st api controller
const createUser = async (req, res) => {
    try {
        // Checking if the request is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Request body is empty'
            })
        }
        
        // check if a user with the same mobile number or email already exists
        const { emp_mobile, emp_email } = req.body;
        const user = await User.findOne({ $or: [{ emp_mobile }, { emp_email }] });
        if (user) {
          return res.status(400).json({
            status: 'error' ,
            message: "User already registered."});
        }

        // Creating new user
        const newUser = new User(req.body)
        await newUser.save()

        res.status(201).json({
            status: 'success',
            message: 'New user registered successfully.'
        })
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: error
        })
    }
}

// 2nd api controller
const assignTicket = async (req, res) => {
    console.log(req.body)
    try {
        // Checking if the request is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Request body is empty'
            })
        }

        // Checking if the email exists in the users collection
        const user = await User.findOne({
            emp_email: req.body.emp_email
        })

        if (!user) {
            return res.status(204).json({
                status: 'error',
                data: 'No such user exists.'
            })
        }

        // Finally creating the ticket in the tickets collection
        const ticket = new Ticket({
            ticketID: req.body.ticketID,
            ticketDescription: req.body.ticketDescription,
            emp_email: req.body.emp_email
        })

        await ticket.save();

        res.status(201).json({
            data: 'success',
            message: 'Ticket assigned to user.'
        })
    } catch (err) {
        res.status(500).json({
            data: 'error',
            message: 'Error assigning ticket to user. Please try again.'
        })
    }
}

// 3rd api controller
const showUserTickets = async (req, res) => {
    try {
        // Checking if the request is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Request body is empty'
            })
        }

        // Checking if the email exists in the users collection
        const user = await User.findOne({
            emp_email: req.body.emp_email
        })

        if (!user) {
            return res.status(204).json({
                status: 'error',
                data: 'No such user exists.'
            })
        }

        let tickets = await Ticket.find({
            emp_email: req.body.emp_email
        })
        console.log(tickets)
        res.status(201).json({
            status: 'success',
            data: tickets
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            data: 'Error fetching tickets. Please try again.'
        })
    }
}

module.exports = {
    showHome,
    createUser,
    assignTicket,
    showUserTickets
}