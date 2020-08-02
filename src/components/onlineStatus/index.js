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

const Wrapper = styled.div`
	.online-status {
		height: 10px;
		width: 10px;
		background: #5ed1b3;
		border-radius: 50%;
	}

	.online-status-text {
		margin-left: 5px;
		font-weight: 500;
	}

	.default {
		font-size: 1rem;
	}

	.small {
		font-size: 0.7rem;
		height: 8px;
		width: 8px;
		background: #5ed1b3;
		border-radius: 50%;
		font-weight: normal;
	}
`;

const OnlineStatus = ({ type = 'default' }) => {
	return (
		<Wrapper className={`online-status-component ${type}`}>
			<div className={`online-status ${type}`} />
			<span className="online-status-text">Online</span>
		</Wrapper>
	);
};

export default OnlineStatus;
