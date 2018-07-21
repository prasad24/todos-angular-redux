import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { select } from '@angular-redux/store';
import { ITodo } from '../../interfaces/todo';
import { TodosService } from '../../redux/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @select() todos: Array<ITodo>;
  @Output() onEdit = new EventEmitter();

  selectedTodos: Array<ITodo>;

  constructor(private todosService:TodosService) { }

  ngOnInit() {
    this.todosService.get();
  }

  editTodo(todo) {
    this.onEdit.emit({
      todo
    });
  }

  deleteTodo(id) {
    this.todosService.delete(id);
  }

  toggleComplete(id) {
    this.todosService.toggleComplete(id);
  }
}
