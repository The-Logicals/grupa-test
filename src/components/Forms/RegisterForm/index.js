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
	.register-form {
		height: 100%;
		width: 100%;
		background: #fff;
		box-shadow: 75px 80px 23px rgba(0, 0, 0, 0.09);
		border-radius: 5px;
		padding: 50px;
	}

	.register-form-text {
		font-family: 'Poppins', Arial, sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 30px;
		color: #111;
		margin-top: 40px;
	}

	.form-group,
	.sign-in-option {
		margin-top: 30px;
	}

	.register-btn {
		margin-top: 50px;
	}
`;

const RegisterForm = () => {
	return (
		<Wrapper>
			<div className="register-form">
				<div>
					<KeekLogo />
				</div>
				<div className="register-form-text">Create an account</div>
				<Form>
					<Form.Group controlId="formBasicFullName">
						<Form.Control type="text" placeholder="Full Name" />
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" />
					</Form.Group>

					<Form.Group controlId="formBasicUserName">
						<Form.Control type="text" placeholder="Username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<div className="register-btn">
						<Button variant="primary" type="submit">
							Register
						</Button>
					</div>

					<div className="sign-in-option">
						Already have an account? <Link to="/signin">Login</Link>
					</div>
				</Form>
			</div>
		</Wrapper>
	);
};

export default RegisterForm;
