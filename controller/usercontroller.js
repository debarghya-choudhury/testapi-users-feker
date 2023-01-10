const showHome = (req, res) => {
    res.status(200).send('users-api-feker home page')
}

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

module.exports = { showHome, createUser }

