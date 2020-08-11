import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sendicon from '../../assets/images/send.svg';

const Wrapper = styled.div`
	.send-msg-button {
		background: #1ac8ed;
		border-radius: 8px;
		width: 60px;
		height: 60px;
		border: none;
		outline: none;
		color: #fff;
	}

	.btn-icon {
		height: 15px;
		width: 15px;
		margin: 6px;
	}
`;

export default function Button(props) {
	return (
		<Wrapper>
			<button
				{...props}
				className="send-msg-button"
				type="submit"
				data-cy="btn"
			>
				<img className="btn-icon" src={sendicon} alt="add-contacts-icon" />
			</button>
		</Wrapper>
	);
}

Button.propTypes = {
	loading: PropTypes.bool,
};
