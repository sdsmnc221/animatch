import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Button from '../Button';
import Modal, { renderModalContent } from '../Modal';

import configs from '../../configs';

const { credits, rules, extLink } = configs.menu;

const Nav = styled.nav`
	position: absolute;
	bottom: 0;
	left: 0;
	display: ${({ currentPage }) => (currentPage === '/' ? 'none' : 'block')};
	visibility: ${({ currentPage }) =>
		currentPage === '/' ? 'hidden' : 'visible'};
`;

const Menu = ({ currentPage }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [contentType, setContentType] = useState(null);
	const { endGameStatus } = useSelector((state) => state.session);

	const showModal = (what) => {
		setModalVisible(true);
		setContentType(what);
	};

	const hideModal = () => {
		setModalVisible(false);
		setContentType(null);
	};

	useEffect(() => {
		if (endGameStatus) showModal(configs.modals.endgame.label);
	}, [endGameStatus]);

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
					{renderModalContent(contentType, endGameStatus)}
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
