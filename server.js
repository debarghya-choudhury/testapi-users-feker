const express = require('express')
const app = express()
app.disable('x-powered-by');
require('dotenv').config()
require('./database')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.csrf())

// Routes
const userRouter = require('./routes/userRoutes')
app.use('/api/v1/users', userRouter)


// Basic global error handler for the test
app.get('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/api/v1/users`)
})
