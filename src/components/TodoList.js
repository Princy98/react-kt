import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
	return (
		<div className="todos-list-container">
			<p>Todo List</p>
			<ul className="todo-list">
				{
					todos.map((todo, index) => {
                        return <TodoListItem key={index} {...todo} />
                    })
                }
			</ul>
		</div>
	)
}

export default TodoList;
