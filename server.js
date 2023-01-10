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


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})