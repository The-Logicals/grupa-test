/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import ChatInterfaceLayout from '../../components/layouts/ChatInterfaceLayout';
import Contact from '../../components/Contacts';
import Chat from '../../components/Chat';
import Header from '../../components/Header';

const Wrapper = styled.div`
	.online-status-component {
		display: grid;
		grid-template-columns: 10px 1fr;
		align-items: center;
	}
`;

const ChatInterface = () => {
	return (
		<Wrapper>
			<ChatInterfaceLayout>
				<Header />
				<Contact />
				<Chat />
			</ChatInterfaceLayout>
		</Wrapper>
	);
};

export default ChatInterface;
