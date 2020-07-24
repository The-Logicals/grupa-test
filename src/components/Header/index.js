/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import HeaderDropdown from '../HeaderDropdown';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import msgicon from '../../assets/images/msg-icon.svg';
import pulseicon from '../../assets/images/pulse-icon.svg';
import dropdown from '../../assets/images/dropdown.svg';

function useComponentVisible(initialIsVisible) {
	const [isComponentVisible, setIsComponentVisible] = React.useState(
		initialIsVisible
	);
	const ref = React.useRef(null);

	const handleHideDropdown = (event) => {
		if (event.key === 'Escape') {
			setIsComponentVisible(false);
		}
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener('keydown', handleHideDropdown, true);
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('keydown', handleHideDropdown, true);
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
}

const Header = () => {
	const [user, setUser] = React.useState({});
	const {
		ref,
		isComponentVisible,
		setIsComponentVisible,
	} = useComponentVisible(false);

	React.useEffect(() => {
		const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
		setUser(userFromLocalStorage);
	}, []);

	const toggleComponent = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	return (
		<>
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
				<div onClick={toggleComponent} className="user-fullname">
					{user.fullName}
				</div>
				<div className="dropdown-icon">
					<button className="btn-drp" type="button" onClick={toggleComponent}>
						<img className="drp" src={dropdown} alt="drp-icon" />
					</button>
				</div>
			</div>
			<div ref={ref}>
				{isComponentVisible && <HeaderDropdown user={user} />}
			</div>
		</>
	);
};

export default Header;
