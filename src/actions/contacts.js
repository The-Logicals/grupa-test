// action types
import * as types from './types';

// services
import contactService from '../services/contactService';

export const getContacts = () => async (dispatch) => {
	try {
		dispatch({
			type: types.GET_CONTACTS,
		});
		const { data } = await contactService.getContacts();

		dispatch({
			type: types.GET_CONTACTS_SUCCESS,
			contacts: data.data,
		});
	} catch (error) {
		dispatch({
			type: types.GET_CONTACTS_FAILURE,
			error,
		});
	}
};
