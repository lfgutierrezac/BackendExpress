const jwt = require('jsonwebtoken')

const Authorized = (req, res, next) => {
    const token = req.header('x-auth-token') // utilizar un header con nombre dificil de repetir
    if(!token){ // si no se envía un token 
        res.status(403).json('unauthorized')
    }// si si hay token
    try {
        const decode = jwt.verify(token, proccess.env.JWT_SECRET) // decodifica el token
        req.user = decoded
        next()
    } catch (error) {
        res.status(405).json({msg:'Invalid token'})
    }
}

module.exports = Authorized