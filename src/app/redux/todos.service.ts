import { Injectable } from '@angular/core';
import {NgRedux} from '@angular-redux/store'
import { IAppState } from '../interfaces/appState';
import { ITodo } from '../interfaces/todo';
import { TODO_ADD, TODO_UPDATE, TODO_DELETE, TODO_TOGGLE_COMPLETE, GET_TODOS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private ngRedux:NgRedux<IAppState>) { }

  save(todo: ITodo): any {
    this.ngRedux.dispatch({
      type: TODO_ADD,
      payload: {
        todo
      }
    });
  }

  update(todo: ITodo): any {
    this.ngRedux.dispatch({
      type: TODO_UPDATE,
      payload: {
        todo
      }
    });
  }

  delete(id: number): any {
    this.ngRedux.dispatch({
      type: TODO_DELETE,
      payload: {
        id
      }
    });
  }

  toggleComplete(id): any {
    this.ngRedux.dispatch({
      type: TODO_TOGGLE_COMPLETE,
      payload: {
        id
      }
    });
  }

  get(): any {
    this.ngRedux.dispatch({
      type: GET_TODOS,
      payload: {
      }
    });
  }
}

