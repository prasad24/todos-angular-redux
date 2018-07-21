import * as TodoActions from './actions';
import { IAppState } from '../interfaces/appState';
import { ITodo } from '../interfaces/todo';

export const INITIAL_STORE_STATE: IAppState = {
    todos: [],
    lastCreated: new Date(),
    lastUpdated: new Date()
}

export const rootReducer = (state = INITIAL_STORE_STATE, action) => {
    switch(action.type) {
        case TodoActions.GET_TODOS:
            return Object.assign({}, state);
        case TodoActions.TODO_ADD:
            var { todo } = action.payload;
            var newId = 1;
            var todos: Array<ITodo> = state.todos;
            if(todos.length > 0) {
                newId = Math.max(...todos.map(todo => todo.id)) + 1;
            }
            todo.id = newId;
            todos.unshift(todo);
            return Object.assign({}, state, {
                todos,
                lastCreated: new Date()
            });
        case TodoActions.TODO_DELETE:
            var { id } = action.payload;
            var todos:Array<ITodo> = state.todos.filter(todo => todo.id !== id);
            return Object.assign({}, state, {
                todos,
                lastUpdated: new Date()
            });
        case TodoActions.TODO_TOGGLE_COMPLETE:
            var { id } = action.payload;
            console.log('toggle', id);
            var todos:Array<ITodo> = state.todos.map(todo => {
                if(todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            });
            console.log('todos', todos)
            return Object.assign({}, state, {
                todos,
                lastUpdated: new Date()
            });
        case TodoActions.TODO_UPDATE:
            var { todo } = action.payload;
            var todos:Array<ITodo> = state.todos.map(t => {
                if(t.id === todo.id) {
                    return todo;
                }
                return t;
            });
            return Object.assign({}, state, {
                todos,
                lastUpdated: new Date()
            });
        default:
            return Object.assign({}, state);
    }
}