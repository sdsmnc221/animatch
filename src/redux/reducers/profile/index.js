import { PROFILE_NEW_USER, PROFILE_RESET_USERNAME } from '../../actionTypes';
import initialStates from '../../initialStates';

import Haikunator from 'haikunator';

function name() {
	return new Haikunator().haikunate({ tokenLength: 0 });
}

function profile(state = initialStates.profile, action) {
	switch (action.type) {
		case PROFILE_NEW_USER: {
			return {
				...state,
				username: name()
			};
		}
		case PROFILE_RESET_USERNAME: {
			return {
				...state,
				username: name()
			};
		}
		default:
			return state;
	}
}

export default profile;
