import * as ActionTypes from './ActionTypes'

export const addTodo = text => ({ type: ActionTypes.ADD_TODO, text })
export const deleteTodo = id => ({ type: ActionTypes.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: ActionTypes.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: ActionTypes.COMPLETE_TODO, id })
export const completeAll = () => ({ type: ActionTypes.COMPLETE_ALL })
export const clearCompleted = () => ({ type: ActionTypes.CLEAR_COMPLETED })
export const listTodos = () => ({ type: ActionTypes.LIST_TODOS })
