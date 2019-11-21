import {
	SESSION_FETCH_IMAGES_START,
	SESSION_FETCH_IMAGES_SUCCESS,
	SESSION_FETCH_IMAGES_FAILURE
} from '../../actionTypes';

import initialStates from '../../initialStates';

function play(state = initialStates.session, action) {
	switch (action.type) {
		case SESSION_FETCH_IMAGES_START: {
			return {
				...state
			};
		}
		case SESSION_FETCH_IMAGES_SUCCESS: {
			const { images, cards } = action.payload;
			return {
				...state,
				images,
				cards
			};
		}
		case SESSION_FETCH_IMAGES_FAILURE: {
			const error = action.payload;
			return {
				...state,
				hasError: true,
				error
			};
		}
		default:
			return state;
	}
}

export default play;
