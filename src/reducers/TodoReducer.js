import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionsTypes'

const INITIAL_DATA = [];

const TodoReducer = (state = INITIAL_DATA, action) => {
	 switch (action.type) {
			case ADD_TODO:
				 return [...state, ...action.todo]
			case TOGGLE_TODO:
				 return state.map(todo =>
					 (todo.id === action.id) ?
						 {...todo, completed: !todo.completed} :
						 todo
				 );
			case REMOVE_TODO:
				 const numIndex = parseInt(action.id);
				 return state.filter(todo => todo.id !== numIndex);
			default:
				 return state
	 }
};

export default TodoReducer