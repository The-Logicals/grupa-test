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
import Header from '../../components/Header';

const Wrapper = styled.div``;

const ChatInterface = () => {
	return (
		<Wrapper>
			<ChatInterfaceLayout>
				<Header />
				<Contact />
				<div>ChatInterface</div>
			</ChatInterfaceLayout>
		</Wrapper>
	);
};

export default ChatInterface;
