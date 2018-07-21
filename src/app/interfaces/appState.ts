import {ITodo} from './todo'

export interface IAppState {
    todos: Array<ITodo>,
    lastCreated: Date,
    lastUpdated: Date,
}