/* -------------------------------------------------------------------------- */
/*                            External Dependency                         */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

/* --------------------------- Internal Dependency -------------------------- */
import Routes from 'routes';

const App = () => (
	<>
		<ToastContainer hideProgressBar position="top-center" />
		<Routes />
	</>
);

export default App;
