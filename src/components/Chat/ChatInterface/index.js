/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Header from './Header';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */

const Wrapper = styled.div`
	.header {
		border: 1px solid #f0f0f0;
	}

	.body {
		border: 1px solid black;
	}

	.footer {
		border: 1px solid black;
	}

	.chat-date {
		text-align: center;
	}
`;

const ChatInterface = () => {
	return (
		<Wrapper className="chat-box-container">
			<div className="header">
				<Header />
			</div>
			<div className="body">
				<div className="chat-date">Friday 6:21 PM</div>
			</div>
			<div className="footer">Footer</div>
		</Wrapper>
	);
};

export default ChatInterface;
