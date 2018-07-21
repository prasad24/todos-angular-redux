import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ITodo } from '../../interfaces/todo';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{

  @select() todos: Array<ITodo>;
  @select() lastCreated: Date;
  @select() lastUpdated: Date;

  showAdd: boolean = false;

  todo: ITodo;

  constructor() { }

  ngOnInit() {
    this.todo = this.defaultTodo;
  }

  get defaultTodo(): ITodo {
    return {
      id: 0,
      description: '',
      priority: '',
      assignedTo: '',
      isCompleted: false
    }
  }

  addTodo() {
    this.todo = this.defaultTodo;
    this.showAdd = true;
  }

  editTodo(data) {
    this.todo = data.todo;
    this.showAdd = true;
  }

  cancelAdd() {
    this.showAdd = false;
  }

}
