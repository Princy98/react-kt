import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import {
	ConnectedRouter, routerMiddleware
} from 'react-router-redux';


import TodosPage from './containers/TodosPage';
import reducers from './reducers/index';
import { listTodos } from './actions/TodoActions';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
	applyMiddleware(middleware)
);

store.dispatch(listTodos());

ReactDOM.render(
  <Provider store={store}>
   	<ConnectedRouter history={history}>
   		<Route path="/" exact component={TodosPage} />
   	</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
