/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import http from '../utils/http';

const ContactService = {
	/**
	 * get contacts
	 *
	 * @param {Object} contacts payload
	 *
	 * @returns error or success message
	 */
	getContacts() {
		return http().get('/user/contacts');
	},
};

export default ContactService;
