/* eslint-disable no-unused-expressions */
/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Button from '../../Button';
import KeekLogo from '../../Logo';
import { loginUserAction } from '../../../actions/auth';
import authservice from '../../../services/authService';

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

	#formBasicEmail {
		margin-top: 50px;
	}

	.forgot-password-text {
		text-align: right;
	}
`;

const initalState = {
	email: '',
	password: '',
};

const schema = yup.object({
	email: yup
		.string()
		.email()
		.required(),
	password: yup
		.string()
		.trim()
		.required(),
});

const SignInForm = ({ loading, history, loginUser }) => {
	const submitLoginForm = (values) => {
		loginUser(values, history);
	};

	React.useEffect(() => {
		authservice.isSignedIn() && history.push('/chat');
	}, []);
	return (
		<Wrapper>
			<div className="sign-in-form">
				<div>
					<KeekLogo />
				</div>
				<div className="sign-in-text">Welcome Back</div>
				<Formik
					initialValues={initalState}
					onSubmit={submitLoginForm}
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
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									value={values.email}
									onChange={handleChange}
									name="email"
									type="email"
									isInvalid={touched.email && !!errors.email}
									onBlur={handleBlur}
									placeholder="Email"
								/>
								<Form.Control.Feedback type="invalid">
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Control
									value={values.password}
									onChange={handleChange}
									name="password"
									isInvalid={touched.password && !!errors.password}
									onBlur={handleBlur}
									type="password"
									placeholder="Password"
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password}
								</Form.Control.Feedback>
							</Form.Group>

							<div className="forgot-password-text">
								<Link href="/forgot-password">Forget Password?</Link>
							</div>

							<div className="sign-in-btn">
								<Button
									loading={loading}
									disabled={!isValid}
									variant="primary"
									type="submit"
								>
									Sign In
								</Button>
							</div>

							<div className="sign-up-option">
								Do not have an account? <Link to="/register">Register Now</Link>
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
	loginUser: loginUserAction,
};

SignInForm.propTypes = {
	loginUser: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	history: PropTypes.objectOf(PropTypes.any),
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SignInForm));
