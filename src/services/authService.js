// utils
import http from '../utils/http';

const AuthService = {
	/**
	 * logs in a user to the application
	 *
	 * @param {Object} userDetails payload
	 *
	 * @returns error or success message
	 */
	login(userDetails) {
		return http().post('/auth/login', userDetails);
	},

	/**
	 * Registers a new user
	 *
	 * @param {*} userDetails payload
	 *
	 * @returns error or success message
	 */
	register(userDetails) {
		return http().post('/auth/register', userDetails);
	},
};

export default AuthService;