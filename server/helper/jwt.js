require('dotenv').config()

const jwt = require('jsonwebtoken')

module.exports.generateToken = data => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET)
}

module.exports.decodeToken = token => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}