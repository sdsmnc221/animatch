import { createStore, applyMiddleware, compose } from 'redux';
// import { autoRehydrate } from 'redux-persist';
// import thunk from 'redux-thunk';

// import { variables, apiKeys, currentLocale } from '../config';

import rootReducer from './reducers';
import initialStates from './initialStates';

function create() {
	// const middlewares = [thunk, fetchMiddlewareInstance];
	// const enhancer = compose(autoRehydrate(), applyMiddleware(...middlewares));
	// const storeInstance = createStore(rootReducer, enhancer);

	const storeInstance = createStore(rootReducer, initialStates);

	return storeInstance;
}

export default function store() {
	return create();
}
