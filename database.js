const mongoose = require('mongoose')

// connecting to local database as this is a test project
mongoose.connect(process.env.LOCAL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database")
}).catch(err => {
    console.log(err)
})