/**
 * Layout component that contains base theme
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';

const Layout = ({ children }) => {
	return (
		<>
			<main className="app">{children}</main>
			<nav className="app__menu"></nav>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
