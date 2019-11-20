import { combineReducers } from 'redux';

import profile from './profile';
import play from './play';

const appReducer = combineReducers({
	profile,
	play
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
