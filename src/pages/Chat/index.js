/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import ChatInterfaceLayout from '../../components/layouts/ChatInterfaceLayout';

const Wrapper = styled.div``;

const ChatInterface = () => {
	return (
		<Wrapper>
			<ChatInterfaceLayout>
				<div>Header</div>
				<div>ContactList</div>
				<div>ChatInterface</div>
			</ChatInterfaceLayout>
		</Wrapper>
	);
};

export default ChatInterface;
