/**
 * Layout component that contains base theme
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Canvas from '../Canvas';

import '../../styles/styles.scss';

const Layout = ({ children, path }) => {
	return (
		<div className="app">
			<main className="app__wrapper">{children}</main>
			<Menu currentPage={path} />
			<aside className="app__modal"></aside>
			<Canvas />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	path: PropTypes.node.isRequired
};

export default Layout;
