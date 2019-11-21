import {
	PLAY_SET_CONFIGS,
	PLAY_RESET_CONFIGS,
	PLAY_COUNT_MOVES
} from '../actionTypes';

export const setConfigs = (dispatch, payload) =>
	dispatch({ type: PLAY_SET_CONFIGS, payload });

export const resetConfigs = (dispatch) =>
	dispatch({ type: PLAY_RESET_CONFIGS });

export const countMoves = (dispatch) => dispatch({ type: PLAY_COUNT_MOVES });
