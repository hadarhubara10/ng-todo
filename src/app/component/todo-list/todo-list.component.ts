import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  @Input() todos: ITodo[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public onTodoClick(todo: ITodo, index: number): void {
    this.todoService.getSelectedTodo().subscribe((data) => {
      if (data) data.selected = false;
    });
    this.todoService.setSelectedTodo(todo);
    this.todos[index].selected = true;
  }
}
