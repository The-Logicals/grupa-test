import { combineReducers } from 'redux';

// reducers
import auth from './auth';
import contacts from './contacts';

export default combineReducers({
	auth,
	contacts,
});
