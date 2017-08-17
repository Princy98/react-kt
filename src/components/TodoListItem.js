import React from 'react';

const TodoListItem = ({ todo, index }) => {
	return (
		<li>
			{todo.id}. {todo.title} - {todo.description}
		</li>
	)
}

export default TodoListItem;
