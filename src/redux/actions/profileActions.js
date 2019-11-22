import axios from 'axios';

import {
	PROFILE_NEW_USER,
	PROFILE_RESET_USERNAME,
	PROFILE_LOOKUP_COUNTRY_START,
	PROFILE_LOOKUP_COUNTRY_SUCCESS,
	PROFILE_LOOKUP_COUNTRY_FAILURE
} from '../actionTypes';

import configs from '../../configs';

export const newUser = (dispatch) => {
	dispatch({ type: PROFILE_NEW_USER });
	fetchCountry(dispatch);
};

export const newUsername = (dispatch) =>
	dispatch({ type: PROFILE_RESET_USERNAME });

export const fetchCountry = (dispatch) => {
	dispatch({ type: PROFILE_LOOKUP_COUNTRY_START });

	axios
		.get(configs.API.ip)
		.then(({ data }) => {
			const { city, country } = data;
			dispatch({
				type: PROFILE_LOOKUP_COUNTRY_SUCCESS,
				payload: {
					country: `${city}, ${country}`
				}
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: PROFILE_LOOKUP_COUNTRY_FAILURE,
				payload: error
			});
		});
};
