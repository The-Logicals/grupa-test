import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import addContactIcon from '../../assets/images/add-contacts.svg';

const Wrapper = styled.div`
	.chat-list-button {
		border-radius: 28px;
		background: rgb(26, 200, 237);
		width: 131.78px;
		height: 37px;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 800;
		font-size: 14px;
	}

	.chat-list-button:hover {
		background: rgb(27, 139, 163);
	}

	.btn-icon {
		height: 15px;
		width: 15px;
		margin: 6px;
	}
`;

export default function Button(props) {
	const { loading = false } = props;
	return (
		<Wrapper>
			<button
				{...props}
				loading={loading.toString()}
				className="chat-list-button"
				type="button"
				data-cy="btn"
			>
				<span className="btn-text">Add friends</span>
				<img
					className="btn-icon"
					src={addContactIcon}
					alt="add-contacts-icon"
				/>
			</button>
		</Wrapper>
	);
}

Button.propTypes = {
	loading: PropTypes.bool,
};
