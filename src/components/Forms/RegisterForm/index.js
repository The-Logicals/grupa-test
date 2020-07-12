/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Button from '../../Button';
import KeekLogo from '../../Logo';
import { registerUserAction } from '../../../actions/auth';
import authservice from '../../../services/authService';

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

const initalState = {
	fullName: '',
	email: '',
	username: '',
	password: '',
};

const schema = yup.object({
	fullName: yup.string().required(),
	username: yup.string().required(),
	email: yup
		.string()
		.email()
		.required(),
	password: yup
		.string()
		.trim()
		.matches(
			/^[a-zA-Z0-9]{8,30}$/,
			'Password must contain at least 8 chatacters including, UPPERCASE, lowercase and numbers'
		)
		.min(8)
		.required(),
});

const RegisterForm = ({ registerUser, loading, history }) => {
	const submitRegistrationForm = (values) => {
		registerUser(values, history);
	};

	React.useEffect(() => {
		authservice.isSignedIn() && history.push('/chat');
	}, []);
	return (
		<Wrapper>
			<div className="register-form">
				<div>
					<KeekLogo />
				</div>
				<div className="register-form-text">Create an account</div>
				<Formik
					initialValues={initalState}
					onSubmit={submitRegistrationForm}
					validationSchema={schema}
				>
					{({
						handleChange,
						handleSubmit,
						handleBlur,
						values,
						touched,
						errors,
						isValid,
					}) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Form.Group controlId="formBasicFullName">
								<Form.Control
									value={values.fullName}
									onChange={handleChange}
									name="fullName"
									type="text"
									placeholder="Full Name"
									isInvalid={touched.fullName && !!errors.fullName}
									onBlur={handleBlur}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.fullName}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Control
									value={values.email}
									onChange={handleChange}
									name="email"
									type="email"
									placeholder="Email"
									isInvalid={touched.email && !!errors.email}
									onBlur={handleBlur}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicUserName">
								<Form.Control
									value={values.username}
									onChange={handleChange}
									name="username"
									type="text"
									placeholder="Username"
									isInvalid={touched.username && !!errors.username}
									onBlur={handleBlur}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.username}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Control
									value={values.password}
									onChange={handleChange}
									name="password"
									type="password"
									placeholder="Password"
									isInvalid={touched.password && !!errors.password}
									onBlur={handleBlur}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password}
								</Form.Control.Feedback>
							</Form.Group>

							<div className="register-btn">
								<Button
									loading={loading}
									disabled={!isValid}
									variant="primary"
									type="submit"
								>
									Register
								</Button>
							</div>

							<div className="sign-in-option">
								Already have an account? <Link to="/signin">Login</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</Wrapper>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		loading: auth.loading,
	};
};

const mapDispatchToProps = {
	registerUser: registerUserAction,
};

RegisterForm.propTypes = {
	registerUser: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	history: PropTypes.objectOf(PropTypes.any),
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(RegisterForm));
