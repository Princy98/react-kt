import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import {
	ConnectedRouter, routerReducer, routerMiddleware
} from 'react-router-redux';

import Home from './containers/Home';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		router: routerReducer
	}),
	applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
   	<ConnectedRouter history={history}>
   		<Route path="/" exact component={Home} />
   	</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
