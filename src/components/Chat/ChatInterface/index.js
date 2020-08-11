/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Header from './Header';
import Sendbutton from '../../Button/sendMsgBtn';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import smileyicon from '../../../assets/images/smiley.svg';

const Wrapper = styled.div`
	.header {
		border: 1px solid #f0f0f0;
		height: 100%;
		max-height: 700px;
	}

	.body {
		border-top: 1px solid #f0f0f0;
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		height: 735px;
	}

	.body::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	.footer {
		border-top: 1px solid #f0f0f0;
	}

	.chat-date {
		text-align: center;
	}

	.chat-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.my-chat-text {
		display: flex;
		flex-direction: row;
		padding: 20px 40px;
		flex: none;
		order: 1;
		align-self: flex-end;
		margin: 5px 10px;
		background: #1ac8ed;
		border-radius: 20px 20px 0px 20px;
		color: #fff;
		width: 60%;
		justify-self: right;
		grid-column: 2/2;
	}

	.your-chat-text {
		display: flex;
		flex-direction: row;
		padding: 20px 40px;
		flex: none;
		order: 2;
		align-self: flex-start;
		margin: 5px 10px;
		background: #f8f8f8;
		border-radius: 20px 20px 20px 0px;
		color: #333333;
		width: 60%;
		justify-self: left;
		grid-column: 1/1;
	}

	.chat-input-section {
		display: grid;
		grid-template-columns: 1fr 80px;
		place-items: center;
		height: 100%;
		padding: 0 20px;
	}

	.send-input {
		height: 60px;
	}
`;

const dummyChat = [
	{
		message: 'Hi we have not seen all week',
		user: 'me',
	},
	{
		message: 'I have been busy, I had to work all weekend bro',
		user: 'you',
	},
	{
		message: 'that is rough tho, hope you are all good',
		user: 'me',
	},
	{
		message: 'Yeas, sure, Thanks Gee',
		user: 'you',
	},
	{
		message: 'Can I make it up to you this Friday?',
		user: 'you',
	},
	{
		message: 'Sounds Perfect',
		user: 'me',
	},
];

const ChatText = ({ chat }) => {
	const { message, user } = chat;
	return (
		<div className="chat-text">
			<div className={user === 'me' ? 'my-chat-text' : 'your-chat-text'}>
				{message}
			</div>
		</div>
	);
};

ChatText.propTypes = {
	chat: PropTypes.objectOf(PropTypes.any),
};

const ChatInputSection = (props) => {
	const { updateChat, chatList } = props;
	const [value, setValue] = React.useState('');

	const send = (e) => {
		if (value.length) {
			e.preventDefault();
			chatList.push({ message: value, user: 'me' });
			const newChat = JSON.parse(JSON.stringify(chatList));
			updateChat(newChat);
			setValue('');
		}
	};

	return (
		<Form onSubmit={send} className="chat-input-section">
			<InputGroup className="send-input-group">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">
						<img src={smileyicon} alt="chat-icon" />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					className="send-input"
					placeholder="Enter text here"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
			</InputGroup>
			<Sendbutton />
		</Form>
	);
};

ChatInputSection.propTypes = {
	updateChat: PropTypes.func,
	chatList: PropTypes.array,
};

const ChatInterface = () => {
	const [chatList, updateChat] = React.useState([]);

	React.useEffect(() => {
		updateChat(dummyChat);
	}, []);

	React.useEffect(() => {
		const bodyOfChat = document.querySelector('#chat-body');
		bodyOfChat.scrollTo(0, bodyOfChat.scrollHeight);
	}, [chatList]);

	return (
		<Wrapper className="chat-box-container">
			<div className="header">
				<Header />
			</div>
			<div id="chat-body" className="body">
				<div className="chat-date">Friday 6:21 PM</div>
				{chatList.map((chat) => (
					<ChatText chat={chat} />
				))}
			</div>
			<div className="footer">
				<ChatInputSection updateChat={updateChat} chatList={chatList} />
			</div>
		</Wrapper>
	);
};

export default ChatInterface;
