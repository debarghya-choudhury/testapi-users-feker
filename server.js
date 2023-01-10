const express = require('express')
const app = express()
require('dotenv').config()
require('./database')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Routes
const userRouter = require('./routes/userRoutes')
app.use('/api/v1/users', userRouter)


// Global error handler
app.get('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/api/v1/users`)
})