import axios from 'axios';

import {
	SESSION_FETCH_IMAGES_START,
	SESSION_FETCH_IMAGES_SUCCESS,
	SESSION_FETCH_IMAGES_FAILURE
} from '../actionTypes';
import utils from '../../utils';
import configs from '../../configs';

const { shuffle, last, deepFlatten, simpleHash } = utils;
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

export const fetchImages = (dispatch, configs) => {
	const { pairsNb, animals } = configs;
	const prep = deepFlatten(assignPairs(pairsNb, animals));
	const prepAxios = prep.map((e) => axios.get(e.link));

	dispatch({ type: SESSION_FETCH_IMAGES_START });

	axios
		.all(prepAxios)
		.then(
			axios.spread((...res) => {
				const images = res.map((image, i) => ({
					type: prep[i].type,
					link: image.data.link,
					uid: simpleHash()
				}));
				const cards = shuffle([...shuffle(images), ...shuffle(images)]);

				dispatch({
					type: SESSION_FETCH_IMAGES_SUCCESS,
					payload: {
						images,
						cards
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
