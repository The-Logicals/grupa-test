/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { withRouter } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import authService from '../../services/authService';
import { storeUser } from '../../actions/auth';

export const onlyAuthUsers = (Component) => {
	class AuthUsers extends React.Component {
		componentDidMount() {
			const { storeUserDetails, history } = this.props;
			if (authService.isSignedIn()) {
				const userDetails = localStorage.getItem('user');
				const storedToken = localStorage.getItem('token');

				try {
					const user = JSON.parse(userDetails);
					const token = storedToken;
					storeUserDetails(user, token);
				} catch (e) {
					localStorage.clear();
					history.push('/signin');
				}
			} else {
				localStorage.clear();
				history.push('/signin');
			}
		}

		render() {
			return <Component {...this.props} />;
		}
	}

	AuthUsers.propTypes = {
		storeUserDetails: PropTypes.func.isRequired,
		history: PropTypes.objectOf(PropTypes.any),
	};

	const mapDispatchToProps = {
		storeUserDetails: storeUser,
	};

	return connect(null, mapDispatchToProps)(withRouter(AuthUsers));
};

export default onlyAuthUsers;
