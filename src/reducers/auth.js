const initialState = {
	user: {},
	signedIn: false,
	message: '',
	error: false,
};

export default (state = initialState, { type }) => {
	switch (type) {
		default:
			return {
				...state,
			};
	}
};
