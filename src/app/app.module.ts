import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './component/header/header.component';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoComponent } from './component/todo/todo.component';
import { NewTodoComponent } from './component/new-todo/new-todo.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, TodoListComponent, TodoComponent, NewTodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
