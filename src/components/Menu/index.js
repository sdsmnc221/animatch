import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Button from '../Button';
import Modal, { renderModalContent } from '../Modal';

import configs from '../../configs';

const { credits, rules, extLink } = configs.menu;

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

	return (
		<>
			<Nav currentPage={currentPage}>
				<Button
					label={credits.buttonLabel}
					click={() => showModal(credits.typeLabel)}
				/>
				<Button
					label={rules.buttonLabel}
					click={() => showModal(rules.typeLabel)}
				/>
				<Link to={extLink(currentPage).to}>{extLink(currentPage).label}</Link>
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
