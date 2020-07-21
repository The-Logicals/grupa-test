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
		border: 1px solid black;
	}

	.chat-section-container {
		display: grid;
		place-items: center;
		background: #fff;
		margin-left: 30px;
		margin-top: 30px;
		margin-right: 30px;
		height: 95%;
	}

	.human-icon-img {
		margin-top: 50px;
	}

	.text-section-no-chat {
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
		align-self: baseline;
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
