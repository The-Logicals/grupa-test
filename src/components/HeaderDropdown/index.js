/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import editicon from '../../assets/images/Edit.svg';

const Wrapper = styled.div`
	.header-dropdown-container {
		position: absolute;
		right: 55px;
		height: 80vh;
		background: #ffffff;
		box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		width: 350px;
	}

	.topborder {
		border-top: 2px solid #f0f0f0;
	}

	.sign-out-section {
		height: 60px;
		text-align: right;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		display: grid;
		align-items: center;
		padding-right: 10px;
	}

	.sign-out-section:hover {
		background: #f0f0f0;
		cursor: pointer;
	}

	.dropdown-profile-section {
		height: 150px;
	}

	.dropdown-bio-section,
	.dropdown-manage-section {
		height: 50px;
	}

	.dropdown-bio-section {
		padding: 10px 30px;
		display: flex;
		justify-content: space-between;
	}

	.dropdown-manage-section {
		font-weight: 600;
		font-size: 18px;
		padding: 10px 30px;
	}

	.dropdown-profile-section {
		padding: 30px;
	}

	.header-profile-grid {
		display: grid;
		grid-template-columns: 60px 1fr;
		grid-template-rows: 1fr 1fr;
	}

	.header-fullname {
		grid-column: 2/-1;
		font-weight: 600;
		font-size: 16px;
		padding-left: 20px;
	}

	.header-profile-image {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		border: 1px solid #979797;
		grid-column: 1/2;
		grid-row: 1/-1;
		border: 1px solid #979797;
	}

	.header-email {
		grid-column: 2/-1;
		padding-left: 20px;
	}

	.online-status-container {
		margin-top: 20px;
		display: grid;
		grid-template-columns: 10px 1fr;
		align-items: center;
	}

	.online-status {
		height: 10px;
		width: 10px;
		background: #5ed1b3;
		border-radius: 50%;
	}

	.online-status-text {
		margin-left: 10px;
		font-weight: 500;
	}

	.dropdown-manage-options-section {
		padding: 10px 30px;
	}

	.manage-item {
		height: 30px;
	}
`;

const HeaderDropdown = ({ user, history }) => {
	const logout = () => {
		history.push('/signin');
		localStorage.clear();
	};
	return (
		<Wrapper>
			<div className="header-dropdown-container">
				<div onClick={() => logout()} className="sign-out-section">
					Sign out
				</div>
				<div className="topborder dropdown-profile-section">
					<div className="header-profile-grid">
						<img
							className="header-profile-image"
							src={user.avatar ? user.avatar : 'https://picsum.photos/200'}
							alt="profile-pic"
						/>
						<span className="header-fullname">{user.fullName}</span>
						<span className="header-email">{user.email}</span>
					</div>
					<div className="online-status-container">
						<div className="online-status" />
						<span className="online-status-text">Online</span>
					</div>
				</div>
				<div className="topborder dropdown-bio-section">
					<span>Software Developer</span>
					<img className="edit-icon" src={editicon} alt="edit-icon" />
				</div>
				<div className="topborder dropdown-manage-section">Manage</div>
				<div className="topborder dropdown-manage-options-section">
					<div className="manage-item">Keek profile</div>
					<div className="manage-item">Blocked accounts</div>
					<div className="manage-item">Change password</div>
					<div className="manage-item">Settings</div>
				</div>
			</div>
		</Wrapper>
	);
};

HeaderDropdown.propTypes = {
	user: PropTypes.objectOf(PropTypes.any),
	history: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(HeaderDropdown);
