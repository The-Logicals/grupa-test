/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import SignInLayout from 'components/layouts/SigninLayout';
import SignInForm from '../../components/Forms/SigninForm';

const SignIn = () => {
	return <SignInLayout form={<SignInForm />} />;
};

export default SignIn;
