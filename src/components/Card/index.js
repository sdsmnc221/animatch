import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import configs from '../../configs';

const { darkSlateGray } = configs.colors;

const bgImg = `background-image: url('/pattern-1.png');
		background-repeat: repeat;
		background-position: center;
		background-size: contain;`;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
	box-shadow: 4px 4px 0 0 ${darkSlateGray};
`;

const Back = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ color }) => color};
	${bgImg}
	backface-visibility: hidden;
`;

const Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	backface-visibility: hidden;
	transform: rotateY(180deg);
`;

const Symbol = styled.div`
	position: absolute;
	z-index: 2;
	top: 6%;
	right: 6%;
	width: calc(100% * ${({ variance }) =>
		variance > 0.6 ? variance / 2 : variance});
	height: calc(100% * ${({ variance }) =>
		variance > 0.6 ? variance / 2 : variance});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	backface-visibility: hidden;
	transform: rotateY(180deg);
	background-image: url('/symbol-${({ symbol }) => symbol}.svg');
	opacity: 0.8;
`;

const Holder = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-color: ${({ color }) => color};
	${bgImg}
	backface-visibility: hidden;
	transform: rotateY(180deg);
`;

const Wrapper = styled.figure`
	background-color: transparent;
	perspective: 1000px;
	with: 100%;
	height: 100%;
	border-radius: 16px;

	* {
		border-radius: 16px;
	}
`;

const Card = ({
	active,
	click,
	link,
	type,
	uid,
	symbol,
	variance,
	index,
	className,
	color
}) => {
	const toggle = () => {
		click({ type, uid, index });
	};

	return (
		<Wrapper
			className={`card ${className} ${active ? 'active' : ''}`}
			onClick={toggle}>
			<Container className="card__inner">
				<Back color={color} />
				<Holder
					color={color}
					style={{
						backgroundImage: `url(/holder-${type.toLowerCase()}.jpg)`
					}}
				/>
				<Front style={{ backgroundImage: `url(${link})` }} className="border" />
				<Symbol symbol={symbol} variance={variance} />
			</Container>
		</Wrapper>
	);
};

Card.propTypes = {
	uid: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	link: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	click: PropTypes.func,
	active: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string.isRequired,
	symbol: PropTypes.number.isRequired,
	variance: PropTypes.number.isRequired
};

Card.defaultProps = {
	click: () => {},
	active: false,
	className: ''
};

export default Card;
