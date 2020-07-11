/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import { verifyUserAction } from '../../actions/auth';

const Wrapper = styled.div`
	.verification-message {
		margin-top: 50px;
		text-align: center;
		font-size: 30px;
		font-weight: Bold;
	}

	.link-to-auth {
		text-align: center;
		font-size: 20px;
	}
`;

const Verify = (props) => {
	const {
		verificationMessage,
		verificationStatus,
		verifyUser,
		location,
		history,
	} = props;
	const { token } = qs.parse(location.search.split('?')[1]);

	useEffect(() => {
		if (token) {
			verifyUser(token, history);
		} else {
			history.push('/register');
		}
	}, []);

	return (
		<Wrapper>
			<div className="verification-message">{verificationMessage}</div>
			<div className="link-to-auth">
				{verificationStatus === 'verified' ? (
					<Link to="/signin">Login here</Link>
				) : (
					<Link to="/register">Register here</Link>
				)}
			</div>
		</Wrapper>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		verificationMessage: auth.verificationMessage,
		verificationStatus: auth.verificationStatus,
	};
};

const mapDispatchToProps = {
	verifyUser: verifyUserAction,
};

Verify.propTypes = {
	verificationMessage: PropTypes.string.isRequired,
	verificationStatus: PropTypes.string.isRequired,
	verifyUser: PropTypes.func.isRequired,
	location: PropTypes.objectOf(PropTypes.any),
	history: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Verify));
