/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.chat-interface-layout {
		display: grid;
		grid-template-columns: 400px 1fr;
		grid-template-rows: 100px 1fr;
		height: 100vh;
	}

	.chat-section {
		grid-column: 2/-1;
		grid-row: 2/-1;
		border: 1px solid black;
		background: #e5e5e5;
	}

	.contact-section {
		grid-column: 1/2;
		grid-row: 1/-1;
	}

	.header-section {
		grid-column: 2/-1;
		grid-row: 1/2;
	}

	.header-section-container {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		align-items: center;
		height: 100%;
	}

	.msg-icon {
		grid-column: 11/12;
		justify-self: center;
	}

	.pulse-icon {
		justify-self: center;
	}

	.user-fullname {
		grid-column: 14/16;
	}

	.profile-pic {
		justify-self: center;
	}

	.profile-image {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		border: 1px solid #979797;
	}

	.user-fullname {
		font-weight: 500;
		font-size: 18px;
	}

	.drp:hover {
		cursor: pointer;
	}

	.btn-drp {
		outline: none;
		border: none;
		background: transparent;
	}
`;

const ChatInterfaceLayout = ({ children }) => {
	const header = children[0];
	const contactList = children[1];
	const chatSection = children[2];
	return (
		<Wrapper>
			<div className="chat-interface-layout">
				<div className="header-section">{header}</div>
				<div className="contact-section">{contactList}</div>
				<div className="chat-section">{chatSection}</div>
			</div>
		</Wrapper>
	);
};

ChatInterfaceLayout.propTypes = {
	children: PropTypes.node,
};

export default ChatInterfaceLayout;
