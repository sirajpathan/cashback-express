// import CashbackModel from '../model/index';
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class Session {
	 _generateAccessToken(username) {
		return jwt.sign({username}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 60 });
	}

	/**
	 *
	 * @param {Object} body credentials provided by user for login
	 * @description Generates JWT token by encoding username in it.
	 */
	create({ username, password }) {
		//Very basic authentication
		//TODO: move credentials to the database
		if (username === 'test' && password === '123456') {
			return this._generateAccessToken(username);
		}
		return false;
	}
}

export default Session;