import * as types from '../actions/types';

const initialState = {
	contacts: [],
	loading: false,
	error: null,
};

export default (state = initialState, payload) => {
	switch (payload.type) {
		case types.GET_CONTACTS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_CONTACTS_SUCCESS:
			return {
				...state,
				loading: false,
				contacts: payload.contacts,
			};
		case types.GET_CONTACTS_FAILURE:
			return {
				...state,
				loading: false,
				error: payload.error,
			};
		default:
			return {
				...state,
			};
	}
};
