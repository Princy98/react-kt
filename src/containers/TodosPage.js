import React from 'react';
import TodoList from '../components/TodoList';
import PropTypes from 'prop-types';
import { connect}  from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import AddTodo from '../components/AddTodo';

const TodosPage = ({ todos, actions }) => (
  <div>
	<div className="header-container">
		<header>
			<h1>Todo Example using React and Redux</h1>
		</header>
		<div className="main-container">
			<AddTodo />
			<TodoList todos={todos} actions={actions} />
		</div>
	</div>
  </div>
)

TodosPage.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPage);
