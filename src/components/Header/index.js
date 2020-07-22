/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import msgicon from '../../assets/images/msg-icon.svg';
import pulseicon from '../../assets/images/pulse-icon.svg';
import dropdown from '../../assets/images/dropdown.svg';

const Wrapper = styled.div``;

const Header = () => {
	const [user, setUser] = React.useState({});
	React.useEffect(() => {
		const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
		setUser(userFromLocalStorage);
	}, []);

	console.log(user, 'userrrr');

	return (
		<div className="header-section-container">
			<div className="msg-icon">
				<img className="msg" src={msgicon} alt="msg-icon" />
			</div>
			<div className="pulse-icon">
				<img className="pulse" src={pulseicon} alt="puls-icon" />
			</div>
			<div className="profile-pic">
				<img
					className="profile-image"
					src={user.avatar ? user.avatar : 'https://picsum.photos/200'}
					alt="profile-pic"
				/>
			</div>
			<div className="user-fullname">{user.fullName}</div>
			<div className="dropdown-icon">
				<img className="drp" src={dropdown} alt="drp-icon" />
			</div>
		</div>
	);
};

export default Header;
