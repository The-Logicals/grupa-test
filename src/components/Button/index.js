import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.keek-button {
		border-radius: 28px;
		background: rgb(26, 200, 237);
		width: 131.78px;
		height: 37px;
		border: none;
		outline: none;
	}

	.keek-button:hover {
		background: rgb(27, 139, 163);
	}
`;

export default function Button(props) {
	const { children } = props;
	return (
		<Wrapper>
			<button {...props} className="keek-button" type="button" data-cy="btn">
				{children}
			</button>
		</Wrapper>
	);
}

Button.propTypes = {
	children: PropTypes.node,
};
