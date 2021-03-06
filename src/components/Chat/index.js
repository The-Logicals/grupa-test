/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Chatinterface from './ChatInterface';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import humanicon from '../../assets/images/human_icon.svg';
import Button from '../Button';

const Wrapper = styled.div``;

const NoChat = () => {
	return (
		<>
			<div className="human-icon-img">
				<img src={humanicon} alt="chat-icon" />
			</div>
			<div className="text-section-no-chat">
				<h5>No messages yet</h5>
				<p>Add friends to stark keeking</p>
				<div className="start-keeking-btn">
					<Button>Start Keeking</Button>
				</div>
			</div>
		</>
	);
};

const Chat = () => {
	return (
		<div className="chat-section-container">
			<Chatinterface />
			{/* <NoChat /> */}
		</div>
	);
};

export default Chat;
