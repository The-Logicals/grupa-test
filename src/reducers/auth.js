import * as types from '../actions/types';

const initialState = {
	user: {},
	signedIn: false,
	message: '',
	error: false,
	loading: false,
	verificationMessage: 'Verification Process',
	verificationStatus: '',
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
		case types.VERIFY_USER:
			return {
				...state,
				verificationMessage: payload.verificationMessage,
			};
		case types.VERIFY_USER_SUCCESS:
			return {
				...state,
				verificationMessage: payload.verificationMessage,
				verificationStatus: payload.verificationStatus,
			};
		case types.VERIFY_USER_FAILURE:
			return {
				...state,
				verificationMessage: payload.verificationMessage,
				verificationStatus: payload.verificationStatus,
			};
		default:
			return {
				...state,
			};
	}
};
