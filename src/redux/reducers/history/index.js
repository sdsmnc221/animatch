import {
	HISTORY_FETCH_SUCCESS,
	HISTORY_FETCH_FAILURE,
	HISTORY_SAVE_SUCCESS,
	HISTORY_SAVE_FAILURE,
	HISTORY_RESET
} from '../../actionTypes';

import initialStates from '../../initialStates';

function history(state = initialStates.history, action) {
	switch (action.type) {
		case HISTORY_FETCH_SUCCESS: {
			const { history: records } = action.payload;
			return {
				...state,
				records,
				hasRecords: records !== null,
				hasError: false
			};
		}
		case HISTORY_FETCH_FAILURE: {
			const error = action.payload;
			return {
				...state,
				hasRecords: state.records !== null,
				hasError: true,
				error
			};
		}
		case HISTORY_SAVE_SUCCESS: {
			const { history: records } = action.payload;
			return {
				...state,
				records,
				hasRecords: records !== null,
				hasError: false
			};
		}
		case HISTORY_SAVE_FAILURE: {
			const error = action.payload;
			return {
				...state,
				hasRecords: state.records !== null,
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
