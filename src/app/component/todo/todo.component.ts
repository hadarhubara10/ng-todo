import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    this._todo = todo;
  }
  get todo() {
    return this._todo;
  }

  private _todo: ITodo;
  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {}
  onCompleteTodo(todo: ITodo): void {
    // todo.isCompleted = true;
    this.TodoService.onTodoComplete(todo.id);
  }
  // onArchivedTodo(todo: ITodo): void {
  //   todo.isArchived = true;
  // }
  onArchivedTodo(): void {
    // this.todo.isArchived = true;
    this.TodoService.onTodoArchived(this.todo.id);
  }
}
