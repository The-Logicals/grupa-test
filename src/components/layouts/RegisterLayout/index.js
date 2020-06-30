/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import HomeImage from '../../../assets/images/Home.png';
import illustration from '../../../assets/images/illustration2.png';

const Wrapper = styled.div`
	.sign-up-layout {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(16, 1fr);
		width: 100%;
		height: 100vh;
	}

	.sign-up-layer1 {
		grid-column: 1/-1;
		grid-row: 1/-1;
		z-index: -100;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.sign-up-illustration {
		grid-column: 1/12;
		grid-row: 3/-1;
		z-index: -100;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.sign-up-form-conatiner {
		grid-column: 10/15;
		grid-row: 3/15;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 1200px) {
		.sign-up-form-conatiner {
			grid-column: 8/15;
		}
	}

	@media only screen and (max-width: 860px) {
		.sign-up-form-conatiner {
			grid-column: 6/15;
		}

		.illustration {
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 400px) {
		.sign-up-form-conatiner {
			grid-column: 2/16;
		}

		.illustration {
			object-fit: cover;
		}
	}
`;

const RegisterLayout = ({ form }) => {
	return (
		<Wrapper>
			<div className="sign-up-layout">
				<img className="sign-up-layer1" src={HomeImage} alt="layer1" />
				<img
					className="sign-up-illustration"
					src={illustration}
					alt="illustration"
				/>
				<div className="sign-up-form-conatiner">{form}</div>
			</div>
		</Wrapper>
	);
};

RegisterLayout.propTypes = {
	form: PropTypes.node,
};

export default RegisterLayout;
