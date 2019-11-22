import axios from 'axios';

import {
	HISTORY_FETCH_START,
	HISTORY_FETCH_SUCCESS,
	HISTORY_FETCH_FAILURE,
	HISTORY_SAVE_FAILURE,
	HISTORY_SAVE_START,
	HISTORY_SAVE_SUCCESS
} from '../actionTypes';

import configs from '../../configs';
import Record from '../../classes/Record';

const { SERVER } = configs;

export const fetchHistory = (dispatch) => {
	dispatch({ type: HISTORY_FETCH_START });

	axios
		.get(`${SERVER.endpoint}${SERVER.fetch}`)
		.then(({ data }) => {
			dispatch({
				type: HISTORY_FETCH_SUCCESS,
				payload: { history: data.allSessions }
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: HISTORY_FETCH_FAILURE,
				payload: error
			});
		});
};

export const saveHistory = (dispatch, state) => {
	dispatch({ type: HISTORY_SAVE_START });

	const record = new Record(state);

	axios
		.post(`${SERVER.endpoint}${SERVER.save}`, record)
		.then(({ data }) => {
			dispatch({
				type: HISTORY_SAVE_SUCCESS,
				payload: { history: data.allSessions }
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: HISTORY_SAVE_FAILURE,
				payload: error
			});
		});
};
