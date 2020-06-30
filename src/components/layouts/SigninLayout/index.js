/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import layer1 from '../../../assets/images/layer1.png';
import layer2 from '../../../assets/images/layer2.png';
import illustration from '../../../assets/images/Illustrations.png';

const Wrapper = styled.div`
	.sign-in-layout {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(16, 1fr);
		width: 100%;
		height: 100vh;
	}

	.layer1 {
		grid-column: 1/-1;
		grid-row: 1/-1;
		z-index: -100;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.layer2 {
		grid-column: 1/-1;
		grid-row: 1/-1;
		z-index: -100;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.illustration {
		grid-column: 1/11;
		grid-row: 3/-1;
		z-index: -100;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.sign-in-form-conatiner {
		grid-column: 10/15;
		grid-row: 3/14;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 1200px) {
		.sign-in-form-conatiner {
			grid-column: 8/15;
			grid-row: 3/14;
		}
	}

	@media only screen and (max-width: 860px) {
		.sign-in-form-conatiner {
			grid-column: 6/15;
			grid-row: 3/14;
		}

		.illustration {
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 400px) {
		.sign-in-form-conatiner {
			grid-column: 2/16;
			grid-row: 3/14;
		}

		.illustration {
			object-fit: cover;
		}
	}
`;

const SigninLayout = ({ form }) => {
	return (
		<Wrapper>
			<div className="sign-in-layout">
				<img className="layer1" src={layer1} alt="layer1" />
				<img className="layer2" src={layer2} alt="layer2" />
				<img className="illustration" src={illustration} alt="illustration" />
				<div className="sign-in-form-conatiner">{form}</div>
			</div>
		</Wrapper>
	);
};

SigninLayout.propTypes = {
	form: PropTypes.node,
};

export default SigninLayout;
