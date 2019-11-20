import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: block;
`;

const Button = ({ label, click }) => {
	return <StyledButton onClick={click}>{label}</StyledButton>;
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	click: PropTypes.func
};

Button.defaultProps = {
	click: () => {}
};

export default Button;
