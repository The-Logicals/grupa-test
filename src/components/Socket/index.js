import React from 'react';
import Socket from './socket';

export const socketComponent = (Component) => (props) => (
	<Component {...props} socket={Socket} />
);
