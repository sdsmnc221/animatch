import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const renderModalContent = (type = null, endGameStatus = null) => {
	let content = <></>;

	switch (type) {
		case 'rules':
			content = <p>Some rules.</p>;
			break;
		case 'credits':
			content = <p>Some credits.</p>;
			break;
		case 'endgame':
			content = <p>You {endGameStatus}.</p>;
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
