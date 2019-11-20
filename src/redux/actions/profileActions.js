import { PROFILE_NEW_USER, PROFILE_RESET_USERNAME } from '../actionTypes';

export const newUser = (dispatch) => dispatch({ type: PROFILE_NEW_USER });

export const newUsername = (dispatch) =>
	dispatch({ type: PROFILE_RESET_USERNAME });
