import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoData: ITodo[] = this.todoStartData();

  todoStartData() {
    if (localStorage.getItem('todos'))
      return JSON.parse(localStorage.getItem('todos'));
    else return [];
  }

  private _todoSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject(
    this.todoData
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.todoData.length ? this.todoData[0] : null
  );

  constructor() {}
  getTodos(): Observable<ITodo[]> {
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }
  // public setSelectedValueTodoFalse(){
  // let test = this._singleTodoSubject.asObservable().subscribe().remove()
  // }
  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo: ITodo): void {
    const exitStingTodos: ITodo[] = this._todoSubject.value;
    exitStingTodos.push(newTodo);
    this._todoSubject.next(exitStingTodos);
    localStorage.setItem('todos', JSON.stringify(exitStingTodos));
  }
}
