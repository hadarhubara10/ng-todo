import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      title: 'Green-backed heron',
      description: 'Butorides striatus',
      isCompleted: true,
      isArchived: false,
      endDate: '1/26/2021',
    },
    {
      title: 'Common rhea',
      description: 'Rhea americana',
      isCompleted: false,
      isArchived: true,
      endDate: '1/10/2021',
    },
    {
      title: 'Spotted-tailed quoll',
      description: 'Dasyurus maculatus',
      isCompleted: false,
      isArchived: false,
      endDate: '10/31/2020',
    },
    {
      title: 'Red deer',
      description: 'Cervus elaphus',
      isCompleted: true,
      isArchived: true,
      endDate: '4/11/2021',
    },
    {
      title: 'Bent-toed gecko',
      description: 'Cyrtodactylus louisiadensis',
      isCompleted: true,
      isArchived: false,
      endDate: '11/6/2020',
    },
    {
      title: 'Gecko, ring-tailed',
      description: 'Cyrtodactylus louisiadensis',
      isCompleted: false,
      isArchived: true,
      endDate: '9/11/2020',
    },
    {
      title: 'Pine squirrel',
      description: 'Tamiasciurus hudsonicus',
      isCompleted: false,
      isArchived: true,
      endDate: '3/25/2021',
    },
    {
      title: 'Gray heron',
      description: 'Ardea cinerea',
      isCompleted: true,
      isArchived: true,
      endDate: '3/27/2021',
    },
  ];

  private _todoSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject(
    this.mock
  );
  constructor() {}
  getTodos(): Observable<ITodo[]> {
    return this._todoSubject.asObservable();
  }
}
