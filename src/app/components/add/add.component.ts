import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITodo } from '../../interfaces/todo';
import { TodosService } from '../../redux/todos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() onCancel = new EventEmitter();

  title:string = 'New Todo';

  constructor(private todosService:TodosService) { }

  ngOnInit() {
    if(this.todo.id > 0) {
      this.title = 'Edit Todo';
    }
  }

  cancelAdd() {
    this.onCancel.emit();
  }

  saveTodo() {
    if(this.todo.id > 0) {
      this.todosService.update(this.todo);
    } else {
      this.todosService.save(this.todo);
    }
    this.onCancel.emit();
  }
}
