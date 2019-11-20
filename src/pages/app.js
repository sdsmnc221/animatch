import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import Login from './app/login';
import Play from './app/play';
import History from './app/history';

const App = () => (
	<>
		<Router>
			<PrivateRoute path="/app/play" component={Play} />
			<PrivateRoute path="/app/history" component={History} />
			<Login path="/app" />
		</Router>
	</>
);

export default App;
