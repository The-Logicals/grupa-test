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

const Wrapper = styled.div``;

const ChatInterface = () => {
	return (
		<Wrapper>
			<ChatInterfaceLayout>
				<div>Header</div>
				<Contact />
				<div>ChatInterface</div>
			</ChatInterfaceLayout>
		</Wrapper>
	);
};

export default ChatInterface;
