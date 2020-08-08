/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import socketIOClient from 'socket.io-client';

import config from '../../config';

const { SOCKET_URL } = config;

class Socket {
	constructor() {
		const socket = this.connect();
		this.socket = socket || null;
		this.state = 'INITIAL';
	}

	connect() {
		this.changeState('CONNECTING');
		const socketInstance = socketIOClient(SOCKET_URL, {
			reconnection: true, // whether to reconnect automatically
			reconnectionAttempts: Infinity, // number of reconnection attempts before giving up
			reconnectionDelay: 1000, // how long to initially wait before attempting a new reconnection
			reconnectionDelayMax: 5000, // maximum amount of time to wait between reconnection attempts. Each attempt increases the reconnection delay by 2x along with a randomization factor
			randomizationFactor: 0.5,
		});

		socketInstance.on('connect', () => {
			console.log('connected to back end');
			this.changeState('CONNECTED');
		});

		socketInstance.on('disconnect', () => {
			console.log('disconnected from back end');
			this.changeState('DISCONNECTED');
		});

		socketInstance.on('connect_error', () => {
			console.log('connection error');
			this.changeState('CONNECTION_ERROR');
		});

		socketInstance.on('reconnecting', () => {
			console.log('reconnecting to server');
			this.changeState('RECONNECTING');
		});

		this.socket = socketInstance;
		return socketInstance;
	}

	changeState(newState) {
		const stateValues = {
			previousState: this.state,
			nextState: newState,
		};

		this.state = newState;
		return stateValues;
	}
}

const instance = new Socket();

export default instance;
