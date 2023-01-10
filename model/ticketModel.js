const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    ticketID: {
        type: String,
        required: true
    },
    ticketDescription: {
        type: String,
        required: true
    },
    emp_email: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);