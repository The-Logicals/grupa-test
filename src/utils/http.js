import axios from 'axios';

let token = '';

/**
 * @returns {Object} axiosInstance
 */
const http = () => {
	if (typeof localStorage !== 'undefined') {
		token = localStorage.getItem('jwtToken');
	}
	const axiosInstance = axios.create({
		baseURL: `${process.env.API_BASE_URL}`,
		headers: {
			Authorization: `Bearer ${token}`,
			accept: 'application/json',
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	/**
	 *
	 * @param {Object} error message
	 *
	 * @returns a new rejected promise
	 */
	const unauthorizedRequestInterceptor = (error) => {
		if (error.message === 'Network Error') {
			//  handle Network errors;
			console.log('Error');
		}

		if (error.response.status === 401) {
			// handle Unauthorized errors
			console.log('401: ', error.response);
		}
		return Promise.reject(error);
	};

	axiosInstance.interceptors.response.use(
		(response) => response,
		unauthorizedRequestInterceptor
	);

	return axiosInstance;
};

export default http;
