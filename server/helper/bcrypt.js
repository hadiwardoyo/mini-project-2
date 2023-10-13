require('dotenv').config()

const bcrypt = require('bcrypt')


module.exports.encryptPWD = password => {
    try {
        let salt = bcrypt.genSaltSync(process.env.SALT)
        return bcrypt.hashSync(password, salt)
    } catch (e) {
        return e
    }
}

module.exports.decryptPWD = (password, hashPWD) => {
    return bcrypt.compare(password, hashPWD)
}