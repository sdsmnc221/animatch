import { combineReducers } from 'redux';

import profile from './profile';
import play from './play';
import session from './session';

const appReducer = combineReducers({
	profile,
	play,
	session
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
