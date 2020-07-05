/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import RegisterLayout from 'components/layouts/RegisterLayout';
import RegisterForm from '../../components/Forms/RegisterForm';

const Register = () => {
	return <RegisterLayout form={<RegisterForm />} />;
};

export default Register;
