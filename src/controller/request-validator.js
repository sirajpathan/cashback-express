const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class RequestValidator {

    /**
	 *
	 * @description Decodes JWT token and stores user data in request object.
	 */
    validate(req, res, next) {
        if (req.path === '/login') {
            return next();
        }
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            console.log(err)

            if (err) return res.sendStatus(403)
            console.log(user);
            req.user = user

            next()
        })
    }
}

module.exports = RequestValidator;