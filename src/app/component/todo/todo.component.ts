import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  toShow = true;
  public todo: ITodo;
  private subscription: Subscription = new Subscription();
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }
  // onArchivedTodo(todo: ITodo): void {
  //   todo.isArchived = true;
  // }
  onArchivedTodo(): void {
    this.todo.isArchived = true;
  }
}
