/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
// import Home from 'pages/Home';
import Signin from 'pages/signin';
import Register from 'pages/register';
import ErrorBoundary from 'components/error-boundary';
import Chat from 'pages/Chat';
import Verify from 'pages/Verify';
import { onlyAuthUsers } from '../components/HOC/onlyAuthUser';
import { socketComponent } from '../components/Socket';

/* ---------------------------- Routes PropTypes ---------------------------- */
const propTypes = {
	location: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const SocketComponent = socketComponent(Chat);
const ChatComponent = onlyAuthUsers(SocketComponent);

const Routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 300 }}
					classNames="fade"
				>
					<Switch location={location}>
						<Route exact path="/" component={Register} />
						<Route exact path="/signin" component={Signin} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/verify" component={Verify} />
						<Route exact path="/chat" component={ChatComponent} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</ErrorBoundary>
	</Wrapper>
);

const Wrapper = styled.div`
	.fade-enter {
		opacity: 0.6;
	}
	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 0.4s ease-in;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-exit.fade-exit-active {
		opacity: 0.6;
		transition: opacity 0.4s ease-in;
	}
`;

Routes.propTypes = propTypes;

export default withRouter(Routes);
