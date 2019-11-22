import axios from 'axios';

import {
	SESSION_FETCH_IMAGES_START,
	SESSION_FETCH_IMAGES_SUCCESS,
	SESSION_FETCH_IMAGES_FAILURE,
	SESSION_DUMP_IMAGES,
	SESSION_UPDATE_CURRENT_CARDS,
	SESSION_CHECK_PAIR,
	SESSION_CHECK_ENDGAME,
	SESSION_RESET_GAME,
	SESSION_COUNT_MOVES,
	SESSION_START_GAME,
	SESSION_DO_ENDGAME
} from '../actionTypes';
import utils from '../../utils';
import configs from '../../configs';

const { shuffle, last, deepFlatten, simpleHash, randomIntegerInRange } = utils;
const { API } = configs;

const link = (label) =>
	`${API.cors}${API.endpoint}${
		API.animals.find((a) => a.label === label).value
	}`;

const assignPairs = (pairsNb, animals) => {
	const len = animals.length;
	const shuffled = shuffle(animals);
	let prep = [];

	if (pairsNb % len === 0) {
		prep = shuffled.map((animal) => ({
			type: animal,
			pairsNb: pairsNb / len
		}));
	} else {
		let pairsNb_ = pairsNb;
		shuffled.forEach((animal, i) => {
			prep.push({
				type: animal,
				pairsNb: Math.ceil(pairsNb_ / len)
			});
			pairsNb_ -= last(prep).pairsNb;
		});

		let i = 0;
		while (pairsNb_ > 0) {
			if (i === len) i = 0;
			prep[i].pairsNb++;

			i++;
			pairsNb_--;
		}
	}

	return prep.map((animal) =>
		[...Array(animal.pairsNb)].map((e) => ({
			type: animal.type,
			link: link(animal.type)
		}))
	);
};

const assignCards = (imagesArray, prep) => {
	const images = imagesArray.map((image, i) => ({
		type: prep[i].type,
		link: image.data ? image.data.link : image.link,
		uid: simpleHash(),
		symbol: randomIntegerInRange(1, 20),
		variance: Math.random()
	}));

	const cards = shuffle([...shuffle(images), ...shuffle(images)]);

	return {
		images,
		cards
	};
};

export const fetchImages = (dispatch, configs, preImages) => {
	const { pairsNb, animals } = configs;

	dispatch({ type: SESSION_FETCH_IMAGES_START });

	const prep = deepFlatten(assignPairs(pairsNb, animals));
	const prepAxios = prep.map((e) => axios.get(e.link));

	axios
		.all(prepAxios)
		.then(
			axios.spread((...res) => {
				const data = assignCards([...res], prep);

				dispatch({
					type: SESSION_FETCH_IMAGES_SUCCESS,
					payload: {
						...data
					}
				});
			})
		)
		.catch((error) =>
			dispatch({
				type: SESSION_FETCH_IMAGES_FAILURE,
				payload: error
			})
		);
};

export const dumpImages = (dispatch) => dispatch({ type: SESSION_DUMP_IMAGES });

export const updateCurrentCards = (dispatch, payload) => {
	dispatch({ type: SESSION_UPDATE_CURRENT_CARDS, payload });
	checkPair(dispatch);
};

export const checkPair = (dispatch) => dispatch({ type: SESSION_CHECK_PAIR });

export const checkEndGame = (dispatch) =>
	dispatch({ type: SESSION_CHECK_ENDGAME, dispatch });

export const doEndGame = (dispatch) => dispatch({ type: SESSION_DO_ENDGAME });

export const resetGame = (dispatch) => dispatch({ type: SESSION_RESET_GAME });

export const startGame = (dispatch) => dispatch({ type: SESSION_START_GAME });

export const countMoves = (dispatch) => dispatch({ type: SESSION_COUNT_MOVES });
