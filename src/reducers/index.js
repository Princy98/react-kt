import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
	todos: todoReducer,
	router: routerReducer,
});

export default rootReducer;
