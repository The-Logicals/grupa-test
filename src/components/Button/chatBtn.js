import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.chat-btn {
		background: #1ac8ed;
		border-radius: 2px;
		width: 32px;
		height: 32px;
		outline: none;
		border: none;
	}

	.chat-btn:hover {
		background: rgb(27, 139, 163);
	}
`;

export default function Button(props) {
	const { children, loading = false } = props;
	return (
		<Wrapper>
			<button
				{...props}
				loading={loading.toString()}
				className="chat-btn"
				type="button"
				data-cy="btn"
			>
				{children}
			</button>
		</Wrapper>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};
