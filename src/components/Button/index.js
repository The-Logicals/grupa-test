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
		color: #fff;
		font-weight: 800;
		font-size: 14px;
	}

	.keek-button:hover {
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
				className="keek-button"
				type="submit"
				data-cy="btn"
			>
				{loading ? 'Loading...' : children}
			</button>
		</Wrapper>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};
