import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Green-backed heron',
      description: 'Butorides striatus',
      isCompleted: false,
      isArchived: false,
      endDate: '1/26/2021',
      selected: true,
    },
    {
      id: 2,
      title: 'Common rhea',
      description: 'Rhea americana',
      isCompleted: false,
      isArchived: false,
      endDate: '1/10/2021',
      selected: false,
    },
    {
      id: 3,
      title: 'Spotted-tailed quoll',
      description: 'Dasyurus maculatus',
      isCompleted: false,
      isArchived: false,
      endDate: '10/31/2020',
      selected: false,
    },
    {
      id: 4,
      title: 'Red deer',
      description: 'Cervus elaphus',
      isCompleted: false,
      isArchived: false,
      endDate: '4/11/2021',
      selected: false,
    },
    {
      id: 5,
      title: 'Bent-toed gecko',
      description: 'Cyrtodactylus louisiadensis',
      isCompleted: false,
      isArchived: false,
      endDate: '11/6/2020',
      selected: false,
    },
    {
      id: 6,
      title: 'Gecko, ring-tailed',
      description: 'Cyrtodactylus louisiadensis',
      isCompleted: false,
      isArchived: false,
      endDate: '9/11/2020',
      selected: false,
    },
    {
      id: 7,
      title: 'Pine squirrel',
      description: 'Tamiasciurus hudsonicus',
      isCompleted: false,
      isArchived: false,
      endDate: '3/25/2021',
      selected: false,
    },
    {
      id: 8,
      title: 'Gray heron',
      description: 'Ardea cinerea',
      isCompleted: false,
      isArchived: false,
      endDate: '3/27/2021',
      selected: false,
    },
  ];

  private _todoSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject(
    this.mock
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.mock[0]
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
}
