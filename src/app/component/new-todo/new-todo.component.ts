import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  constructor(private todoService: TodoService, public dialog: MatDialog) {}
  @ViewChild('f') form: NgForm;
  ngOnInit(): void {}

  public minDate: Date = new Date();

  public onTodoSubmit(): void {
    if (this.form.valid) {
      const formValues = this.form.form.value;
      const newTodos: ITodo = {
        id: uuidv4(),
        title: formValues.title,
        description: formValues.description,
        endDate: formValues.date,
        isArchived: false,
        isCompleted: false,
        selected: false,
      };
      this.todoService.addNewTodo(newTodos);
      this.todoService.getTodos().subscribe((data) => console.log(data));
      this.dialog.closeAll();
    }
  }
}
