import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ text, completed }) => (
	<li>{text}</li>
)

TodoListItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoListItem;
