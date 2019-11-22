import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
	${({ absolute }) =>
		absolute &&
		`
    position: absolute;
    top: 8%;
  `}
`;

const UsernameField = ({ username, absolute }) => {
	return (
		<H2 absolute={absolute} className="usernamefield">
			Hi <strong>{username}</strong>!
		</H2>
	);
};

UsernameField.propTypes = {
	username: PropTypes.string,
	absolute: PropTypes.bool
};

UsernameField.defaultProps = {
	username: '',
	absolute: false
};

export default UsernameField;
