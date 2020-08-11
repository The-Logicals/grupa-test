import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.loader-text {
		text-align: center;
	}
`;

export default function Loader(props) {
	const { loading } = props;
	return (
		<Wrapper>
			<div className="loader-text" {...props}>
				{loading ? 'Loading...' : null}
			</div>
		</Wrapper>
	);
}

Loader.propTypes = {
	loading: PropTypes.bool,
};
