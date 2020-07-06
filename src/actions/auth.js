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
