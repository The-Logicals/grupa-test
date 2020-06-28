/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Button from '../../Button';
import KeekLogo from '../../Logo';

const Wrapper = styled.div`
	.sign-in-form {
		height: 100%;
		width: 100%;
		background: #fff;
		box-shadow: 75px 80px 23px rgba(0, 0, 0, 0.09);
		border-radius: 5px;
		padding: 50px;
	}

	.sign-in-text {
		font-family: 'Poppins', Arial, sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 30px;
		color: #111;
		margin-top: 40px;
	}

	.form-group,
	.sign-up-option,
	.sign-in-btn {
		margin-top: 30px;
	}

	#formBasicUsername {
		margin-top: 50px;
	}

	.forgot-password-text {
		text-align: right;
	}
`;

const SignInForm = () => {
	return (
		<Wrapper>
			<div className="sign-in-form">
				<div>
					<KeekLogo />
				</div>
				<div className="sign-in-text">Welcome Back</div>
				<Form>
					<Form.Group controlId="formBasicUsername">
						<Form.Control type="text" placeholder="Username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<div className="forgot-password-text">
						<Link href="/forgot-password">Forget Password?</Link>
					</div>

					<div className="sign-in-btn">
						<Button variant="primary" type="submit">
							Sign In
						</Button>
					</div>

					<div className="sign-up-option">
						Do not have an account? <Link to="/register">Register Now</Link>
					</div>
				</Form>
			</div>
		</Wrapper>
	);
};

export default SignInForm;
