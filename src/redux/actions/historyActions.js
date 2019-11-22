import axios from 'axios';

import {
	HISTORY_FETCH_START,
	HISTORY_FETCH_SUCCESS,
	HISTORY_SAVE_FAILURE
} from '../actionTypes';

import configs from '../../configs';

const { SERVER } = configs;

export const fetchHistory = (dispatch) => {
	dispatch({ type: HISTORY_FETCH_START });

	axios
		.get(`${SERVER.endpoint}${SERVER.fetch}`)
		.then(({ data }) => {
			console.log(data);
			dispatch({
				type: HISTORY_FETCH_SUCCESS,
				payload: {}
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
