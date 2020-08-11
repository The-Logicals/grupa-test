/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import OnlineStatus from '../../onlineStatus';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import warningicon from '../../../assets/images/warning.svg';

const Wrapper = styled.div`
	.header {
		border: 1px solid black;
	}

	.contact-list {
		padding: 5px 20px;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: 20px 20px;
		height: 40px;
	}

	.contact-list-image {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		margin-right: 20px;
	}

	.contact-list-name {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		color: #000000;
		grid-column: 2/5;
	}

	.contact-list-online {
		grid-column: 2/5;
	}

	.contact-list-warning {
		grid-column: 16;
		grid-row: 1/-1;
		align-self: center;
	}
`;

const data = {};

const ChatBox = () => {
	return <Wrapper />;
};

export default ChatBox;
