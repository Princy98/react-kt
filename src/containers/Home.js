import React, { Component } from 'react';
import TodoList from '../components/TodoList';

const todos = [
	{
		id: 1,
		title: 'First Todo',
		description: 'First todo task',
	},
];

class Home extends Component {
	render() {
		return (
			<div className="header-container">
				<header>
					<h1>Todo Example using React and Redux</h1>
				</header>
				<div className="main-container">
					<TodoList todos={todos} />
				</div>
			</div>
		);
	}
}

export default Home;
