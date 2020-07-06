import * as types from '../actions/types';

const initialState = {
	user: {},
	signedIn: false,
	message: '',
	error: false,
	loading: false,
};

export default (state = initialState, payload) => {
	switch (payload.type) {
		case types.REGISTER:
			return {
				...state,
				loading: true,
			};
		case types.REGISTER_SUCCESS:
			return {
				...state,
				user: payload.user,
				loading: false,
			};
		case types.REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				message: payload.error,
			};
		default:
			return {
				...state,
			};
	}
};
