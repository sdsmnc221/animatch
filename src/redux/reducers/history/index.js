import {
	HISTORY_FETCH_SUCCESS,
	HISTORY_FETCH_FAILURE,
	HISTORY_RESET
} from '../../actionTypes';

import initialStates from '../../initialStates';

function history(state = initialStates.history, action) {
	switch (action.type) {
		case HISTORY_FETCH_SUCCESS: {
			return {
				...state
			};
		}
		case HISTORY_FETCH_FAILURE: {
			const error = action.payload;
			return {
				...state,
				hasError: true,
				error
			};
		}
		case HISTORY_RESET: {
			return {
				...initialStates.history
			};
		}
		default:
			return state;
	}
}

export default history;
