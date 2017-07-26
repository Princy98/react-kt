import React from 'react';

const TodoList = ({ todos }) => {
    return(
         <div className="todo-list-container">
            <h2>Rendering Child Components Using `.map`</h2>
            <h3>Todos List</h3>
            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={index}>{todo.title} </li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;