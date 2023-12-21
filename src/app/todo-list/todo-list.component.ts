import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import {  FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoId: number = 0;
  declare todo: string;
  constructor() {}
  todoList: Todo[] = [];
  checked: boolean[] = Array(this.todoList.length).fill(false);
  addTodo() {
    if (this.todo && this.todo.trim() !== '') {
      const newTodo: Todo = { id: this.todoId, task: this.todo };
      this.todoId++;
      this.todoList.push(newTodo);
      this.todo = '';
    }
  }
  deleteTodo(id: number) {
    const index = this.todoList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    } else {
      
    }
  }
  divCheckbox(itemId: number){
    this.checked[itemId] = !this.checked[itemId];
  }
}
export interface Todo {
  id: number;
  task: string;
}
