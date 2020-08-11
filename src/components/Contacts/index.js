/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Form, InputGroup } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import Button from '../Button/chatBtn';
import ChatList from './ChatList';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */
import chaticon from '../../assets/images/chat.svg';
import contactsicon from '../../assets/images/contacts.svg';
import backicon from '../../assets/images/back-icon.svg';

const Wrapper = styled.div`
	.contact-list-layout {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100px 50px 1fr;
		border-right: 1px solid #f0f0f0;
	}

	.contact-list-header {
		padding: 25px;
		display: grid;
		grid-template-columns: 1fr 10% 10%;
		align-items: center;
		grid-gap: 10px;
	}

	.chat-text {
		font-style: normal;
		font-weight: bold;
		font-size: 30px;
		line-height: 37px;
		color: #1f1235;
	}

	.search-area-container {
		padding: 0 25px;
	}

	.search-area {
		background: #fafafa;
		border: 1px solid #f0f0f0;
		box-sizing: border-box;
		border-radius: 8px;
		height: 40px;
	}

	.new-chat-header {
		display: grid;
		place-items: center;
		grid-template-columns: 10% 1fr;
		padding: 25px;
	}
`;

const Contact = ({ location, getContacts, contacts }) => {
	const { action } = qs.parse(location.search.split('?')[1]);

	const header =
		action && action === 'newchat' ? (
			<div className="new-chat-header">
				<Link to="/chat">
					<img src={backicon} alt="back-icon" />
				</Link>
				<span className="chat-text">New Chat</span>
			</div>
		) : (
			<div className="contact-list-header">
				<span className="chat-text">Chats</span>
				<Link to="/chat?action=newchat">
					<Button>
						<img src={chaticon} alt="chat-icon" />
					</Button>
				</Link>
				<Link to="/chat?action=newchat">
					<Button>
						<img src={contactsicon} alt="chat-icon" />
					</Button>
				</Link>
			</div>
		);
	return (
		<Wrapper>
			<div className="contact-list-layout">
				{header}
				<div className="search-area-container">
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							className="search-area"
							placeholder="Search by Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
							onChange={() => console.log('searching by username')}
						/>
					</InputGroup>
				</div>
				<div className="chat-list-container">
					<ChatList getContacts={getContacts} contacts={contacts} />
				</div>
			</div>
		</Wrapper>
	);
};

Contact.propTypes = {
	location: PropTypes.objectOf(PropTypes.any),
	getContacts: PropTypes.func.isRequired,
	contacts: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(Contact);
