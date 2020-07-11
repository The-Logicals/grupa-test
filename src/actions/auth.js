// Action Creators for Auth Actions
import { toast } from 'react-toastify';

// action types
import * as types from './types';

// services
import authService from '../services/authService';

export const registerUserAction = (userDetails, history) => async (
	dispatch
) => {
	try {
		dispatch({
			type: types.REGISTER,
		});
		const { data } = await authService.register(userDetails);

		dispatch({
			type: types.REGISTER_SUCCESS,
		});
		toast.success(data.message, { autoClose: false });
		history.push('/signin');
	} catch (error) {
		if (error.response) {
			toast.error(error.response.data.error);
		}
		dispatch({
			type: types.REGISTER_FAILURE,
			error,
		});
	}
};

export const verifyUserAction = (token, history) => async (dispatch) => {
	try {
		dispatch({
			type: types.VERIFY_USER,
			verificationMessage: 'we are verifying your account...',
			verificationStatus: 'loading',
		});

		await authService.verifyuser(token);

		dispatch({
			type: types.VERIFY_USER_SUCCESS,
			verificationMessage:
				'Verification successful, we will reidrect you to login in 5 seconds',
			verificationStatus: 'success',
		});

		toast.success('Verification successful', { autoClose: false });
		setTimeout(() => {
			history.push('/signin');
		}, 5000);
	} catch (error) {
		if (error.response) {
			toast.error('Verification unsuccessful');
		}
		dispatch({
			type: types.VERIFY_USER_FAILURE,
			verificationMessage: error.response
				? `${error.response.data.message}`
				: 'Verification unsuccessful',
			verificationStatus: error.response.status === 409 ? 'verified' : 'failed',
		});
	}
};
