import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import configs from '../../configs';

const { rules, credits, endgame } = configs.modals;

const renderModalContent = (type = null, endGameStatus = null) => {
	let content = <></>;

	switch (type) {
		case rules.label:
			content = <p>Some rules.</p>;
			break;
		case credits.label:
			content = <p>Some credits.</p>;
			break;
		case endgame.label:
			content = <p>{endgame.status[endGameStatus]}</p>;
			break;
		default:
			break;
	}

	return content;
};

export { renderModalContent };

const Modal = ({ children }) => {
	const modalRoot = document.querySelector('.app__modal');
	const el = useRef(document.createElement('div'));

	useEffect(() => {
		modalRoot.append(el.current);

		return () => {
			el.current.remove();
		};
	}, []);

	return createPortal(children, el.current);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired
};

export default Modal;
