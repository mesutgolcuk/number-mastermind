import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './containers/NotFound/NotFound';
import Menu from './containers/Menu/Menu';
import Game from './containers/Game/Game';
import History from './containers/History/History';

import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route exact path="/game" component={Game} />
					<Route exact path="/history" component={History} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
