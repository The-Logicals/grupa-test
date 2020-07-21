/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import ChatListBtn from '../../Button/chatlistBtn';

/* -------------------------------------------------------------------------- */
/*                            Image Dependencies                           */
/* -------------------------------------------------------------------------- */

const Wrapper = styled.div`
	.empty-chat-list {
		display: grid;
		place-items: center;
		height: 100%;
		margin-top: 100px;
	}

	.epmty-chat-text {
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #1f1235;
		margin-bottom: 15px;
	}

	.contact-list-image {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		margin-right: 20px;
	}

	.contact-list {
		padding: 10px 25px;
	}

	.contact-list-name {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		color: #000000;
	}
`;

const ChatList = ({ location, contactList }) => {
	const { action } = qs.parse(location.search.split('?')[1]);
	return (
		<Wrapper>
			<div>
				{action && action === 'newchat' ? (
					contactList.map((contact) => (
						<div className="contact-list">
							<img
								className="contact-list-image"
								src={contact.image}
								alt="contact-img"
							/>
							<span className="contact-list-name">{contact.fullname}</span>
						</div>
					))
				) : (
					<div className="empty-chat-list">
						<span className="epmty-chat-text">
							This is where you see your chat list.
						</span>
						<Link to="/chat?action=newchat">
							<ChatListBtn />
						</Link>
					</div>
				)}
			</div>
		</Wrapper>
	);
};

ChatList.propTypes = {
	location: PropTypes.objectOf(PropTypes.any),
	contactList: PropTypes.array,
};

export default withRouter(ChatList);
