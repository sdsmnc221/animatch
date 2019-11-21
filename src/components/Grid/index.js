import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

import utils from '../../utils';
import configs from '../../configs';
import {
	updateCurrentCards,
	checkEndGame
} from '../../redux/actions/sessionActions';
import { countMoves } from '../../redux/actions/playActions';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: ${({ r, s }) => `repeat(${r}, ${s}px)`};
	grid-template-rows: ${({ r, s }) => `repeat(${r}, ${s}px)`};
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	justify-content: center;
	align-content: center;
`;

const Grid = ({ cards }) => {
	const r = Math.sqrt(cards.length);
	const s = utils.closestNumber(r, (configs.dimensions.H() * 0.8) / r);

	const { currentCards, matchedPairs } = useSelector((state) => state.session);
	const isInCurrentCards = (c, i) =>
		currentCards.find((c_) => c_.uid === c.uid) !== undefined &&
		currentCards.find((c_) => c_.index === i) !== undefined;
	const isInMatchedPairs = (c, i) =>
		matchedPairs.find((c_) => c_.uid === c.uid) !== undefined;
	const isActive = (c, i) => isInMatchedPairs(c, i) || isInCurrentCards(c, i);

	const dispatch = useDispatch();
	const click = (card) => {
		updateCurrentCards(dispatch, card);
		checkEndGame(dispatch);
		if (
			!isInCurrentCards(card, card.index) ||
			!isInMatchedPairs(card, card.index)
		)
			countMoves(dispatch);
	};

	return (
		<Container r={r} s={s}>
			{cards.map((c, i) => (
				<Card key={i} {...c} index={i} click={click} active={isActive(c, i)} />
			))}
		</Container>
	);
};

Grid.propTypes = {
	cards: PropTypes.array.isRequired
};

export default Grid;
