import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
	const name = useSelector((state) => state.profile.username);
	if (!name && location.pathname !== `/app/`) {
		// If we’re not logged in, redirect to the home page.
		navigate(`/app/`);
		return null;
	}

	return <Component {...rest} />;
};

PrivateRoute.propTypes = {
	component: PropTypes.any.isRequired
};

export default PrivateRoute;
