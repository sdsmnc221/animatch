import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Button from '../Button';
import Modal, { renderModalContent } from '../Modal';

const Nav = styled.nav`
	display: ${({ currentPage }) => (currentPage === '/' ? 'none' : 'block')};
	visibility: ${({ currentPage }) =>
		currentPage === '/' ? 'hidden' : 'visible'};
`;

const Menu = ({ currentPage }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [contentType, setContentType] = useState(null);

	const showModal = (what) => {
		setModalVisible(true);
		setContentType(what);
	};

	const hideModal = () => {
		setModalVisible(false);
		setContentType(null);
	};

	const extLink = {
		label: currentPage.includes('play') ? 'History' : 'Play',
		to: `/app/${currentPage.includes('play') ? 'history' : 'play'}`
	};

	return (
		<>
			<Nav currentPage={currentPage}>
				<Button label="Rules" click={() => showModal('rules')} />
				<Button label="Credits" click={() => showModal('credits')} />
				<Link to={extLink.to}>{extLink.label}</Link>
			</Nav>
			{modalVisible && (
				<Modal>
					{renderModalContent(contentType)}
					<Button label="Close" click={() => hideModal()} />
				</Modal>
			)}
		</>
	);
};

Menu.propTypes = {
	currentPage: PropTypes.string.isRequired
};

export default Menu;
