import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

import utils from '../../utils';
import configs from '../../configs';
import {
	updateCurrentCards,
	checkEndGame,
	countMoves
} from '../../redux/actions/sessionActions';

const { peru, darkKhaki, rosyBrown } = configs.colors;
const { sample } = utils;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: ${({ cols, cell }) => `repeat(${cols}, ${cell}px)`};
	grid-template-rows: ${({ rows, cell }) => `repeat(${rows}, ${cell}px)`};
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	justify-content: center;
	align-content: center;

	.last-row {
		transform: ${({ transform }) => transform};
	}
`;

const transform = (cell, pairsNb, left) => {
	if (pairsNb === 56 || pairsNb === 14) return 'translateX(0)';
	else
		return `translateX(
			calc(calc((100% - (${left} * ${cell}px) - (3) * 16px)) / ${
			pairsNb === 7 ? 6 : 2.4
		} * -1)
		)`;
};

const layout = (cardsNb) => {
	const pairsNb = cardsNb / 2;
	let cols, rows;

	switch (pairsNb) {
		case 7:
			cols = 5;
			rows = 3;
			break;
		case 14:
			cols = 7;
			rows = 4;
			break;
		case 28:
			cols = 10;
			rows = 6;
			break;
		case 56:
			cols = 14;
			rows = 8;
			break;
		default:
			break;
	}

	return { cols, rows };
};

const Grid = ({ cards }) => {
	const len = cards.length;
	const { cols, rows } = layout(len);
	const cell = utils.closestNumber(cols, (configs.dimensions.H() * 0.6) / rows);
	const color = sample([peru, darkKhaki, rosyBrown]);

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
		<Container
			cols={cols}
			rows={rows}
			cell={cell}
			transform={transform(cell, len / 2, len - cols * (rows - 1))}>
			{cards.map((c, i) => (
				<Card
					key={i}
					{...c}
					index={i}
					click={click}
					active={isActive(c, i)}
					className={`${i >= cols * (rows - 1) && 'last-row'}`}
					color={color}
				/>
			))}
		</Container>
	);
};

Grid.propTypes = {
	cards: PropTypes.array.isRequired
};

export default Grid;
