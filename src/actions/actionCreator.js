import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionsTypes'


export const addTodo = (todo) => ({type: ADD_TODO, todo});

export const deleteTodo = (id) => ({type: REMOVE_TODO, id});

export const toggleTodo = (id) => ({type: TOGGLE_TODO, id});