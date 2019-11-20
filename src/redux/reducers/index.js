import { combineReducers } from 'redux';

import profile from './profile';

const appReducer = combineReducers({
	profile
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
