import {
	SESSION_FETCH_IMAGES_START,
	SESSION_FETCH_IMAGES_SUCCESS,
	SESSION_FETCH_IMAGES_FAILURE,
	SESSION_DUMP_IMAGES,
	SESSION_UPDATE_CURRENT_CARDS,
	SESSION_CHECK_PAIR,
	SESSION_CHECK_ENDGAME,
	SESSION_COUNT_MOVES,
	SESSION_RESET_GAME,
	SESSION_START_GAME
} from '../../actionTypes';

import initialStates from '../../initialStates';
import utils from '../../../utils';

const { distinctBy } = utils;

function play(state = initialStates.session, action) {
	switch (action.type) {
		case SESSION_FETCH_IMAGES_START: {
			return {
				...state,
				fetchingImages: true
			};
		}
		case SESSION_FETCH_IMAGES_SUCCESS: {
			const { images, cards } = action.payload;
			return {
				...state,
				fetchingImages: false,
				images,
				cards
			};
		}
		case SESSION_FETCH_IMAGES_FAILURE: {
			const error = action.payload;
			return {
				...state,
				fetchingImages: false,
				hasError: true,
				error
			};
		}
		case SESSION_DUMP_IMAGES: {
			const { images } = state;
			const { preImages } = state;
			const clean = distinctBy(
				images.map((i) => ({ type: i.type, link: i.link })),
				'link'
			);
			clean.forEach((i) => {
				if (!preImages.find((i_) => i_.link === i.link)) preImages.push(i);
			});
			return {
				...state,
				preImages
			};
		}
		case SESSION_UPDATE_CURRENT_CARDS: {
			const { currentCards: prevCurrentCards } = state;
			const { payload: card } = action;
			const currentCards =
				prevCurrentCards.length < 2 ? [...prevCurrentCards, card] : [card];

			return {
				...state,
				currentCards
			};
		}
		case SESSION_CHECK_PAIR: {
			const { currentCards, matchedPairs } = state;

			if (
				currentCards.length === 2 &&
				currentCards[0].uid === currentCards[1].uid
			) {
				matchedPairs.push(currentCards[0]);
			}

			return {
				...state,
				matchedPairs
			};
		}
		case SESSION_CHECK_ENDGAME: {
			const { images, matchedPairs } = state;
			const endGameStatus = images.length === matchedPairs.length ? 'WIN' : null;

			return {
				...state,
				endGameStatus
			};
		}
		case SESSION_COUNT_MOVES: {
			const { moves } = state;

			return {
				...state,
				moves: moves + 1
			};
		}
		case SESSION_START_GAME: {
			return {
				...state,
				timeCreated: new Date(Date.now())
			};
		}
		case SESSION_RESET_GAME: {
			return {
				...initialStates.session,
				endGameStatus: null,
				moves: 0
			};
		}
		default:
			return state;
	}
}

export default play;
