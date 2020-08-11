/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import ChatInterfaceLayout from '../../components/layouts/ChatInterfaceLayout';
import Contact from '../../components/Contacts';
import Chat from '../../components/Chat';
import Header from '../../components/Header';
import { getContacts } from '../../actions/contacts';

const Wrapper = styled.div`
	.online-status-component {
		display: grid;
		grid-template-columns: 10px 1fr;
		align-items: center;
	}
`;

const ChatInterface = (props) => {
	const { getUserContacts, contacts } = props;
	return (
		<Wrapper>
			<ChatInterfaceLayout>
				<Header />
				<Contact getContacts={getUserContacts} contacts={contacts} />
				<Chat />
			</ChatInterfaceLayout>
		</Wrapper>
	);
};

const mapStateToProps = ({ contacts }) => {
	return {
		contacts,
	};
};

const mapDispatchToProps = {
	getUserContacts: getContacts,
};

ChatInterface.propTypes = {
	getUserContacts: PropTypes.func.isRequired,
	contacts: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface);
