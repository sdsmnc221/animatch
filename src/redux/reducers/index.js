import { combineReducers } from 'redux';

import profile from './profile';
import play from './play';
import session from './session';
import history from './history';

const appReducer = combineReducers({
	profile,
	play,
	session,
	history
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
