const express = require('express')
const app = express()
require('dotenv').config()
require('./database')

// Middlewares
app.use(express.urlencoded({
    extended: false
}))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost/${process.env.PORT}`)
})