import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-style: preserve-3d;
`;

const Back = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
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

const Holder = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-color: black;
	backface-visibility: hidden;
	transform: rotateY(180deg);
`;

const Wrapper = styled.figure`
	background-color: transparent;
	perspective: 1000px;
	with: 100%;
	height: 100%;
`;

const Card = ({ active, click, link, type, uid, index }) => {
	const toggle = () => {
		click({ type, uid, index });
	};

	return (
		<Wrapper className={`card ${active && 'active'}`} onClick={toggle}>
			<Container className="card__inner">
				<Back />
				<Holder
					style={{
						backgroundImage: `url(/holder-${type.toLowerCase()}.jpg)`
					}}
				/>
				<Front style={{ backgroundImage: `url(${link})` }} />
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
	active: PropTypes.bool
};

Card.defaultProps = {
	click: () => {},
	active: false
};

export default Card;
