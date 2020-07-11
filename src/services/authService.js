/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import jwtDecode from 'jwt-decode';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
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
	/**
	 * verifyuser
	 *
	 * @param {*} token payload
	 *
	 * @returns error or success message
	 */
	verifyuser(token) {
		return http().get(`/auth/verification?token=${token}`);
	},
	/**
	 * returns signed in user object
	 *
	 * @returns {Object} userDetails
	 */
	getSignedInUser() {
		if (typeof localStorage !== 'undefined') {
			const token = localStorage.getItem('token');

			if (token) {
				const user = jwtDecode(token);
				const isExpired = user.exp < Date.now() / 1000;
				if (isExpired) {
					return {};
				}

				return user;
			}
		}

		return {};
	},
	/**
	 * Checks if a user is already signed in
	 *
	 * @returns true or false
	 */
	isSignedIn() {
		if (typeof localStorage !== 'undefined') {
			const token = localStorage.getItem('token');
			return !(!token || jwtDecode(token).exp < Date.now() / 1000);
		}
		return false;
	},
};

export default AuthService;
