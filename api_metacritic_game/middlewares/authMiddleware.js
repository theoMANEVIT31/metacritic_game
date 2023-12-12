const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).json({
            success: false,
            error: 'Unauthorized, must be connected'
        })
    } else {
        // const token = authHeader.split(' ')[1]
        console.log(authHeader)
        try{
            const decodedToken = await jwt.verify(authHeader, process.env.JWT_SIGN_SECRET)
            if(decodedToken) {
                next()
            } else {
                res.status(401).json({
                    success: false,
                    error: 'Authentication is no more valid'
                })
            }
        } catch(e) {
            next(e)
        }
    }
}