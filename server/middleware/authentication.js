const { decodeToken } = require('../helper/jwt')

module.exports.verifyToken = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if (access_token === null) return res.status(401).json({ message: 'Unauthorize please deliver token' })
        const tokenDecode = decodeToken(access_token)
        req.useData = tokenDecode
        next()
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports.isAdmin = async (req, res, next) => {
    try {
        const role = req.userData.role
        if (role !== 'admin') return res.status(403).json({ message: 'access denied admin only' })
        next()
    } catch (e) {
        res.status(500).json(e)
    }
}