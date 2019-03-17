import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from "../../models/Todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  todo: Todo = {
      id: null,
      title: '',
      text: '',
      complete: false
  };

  @ViewChild('form') form;

  constructor() { }

  ngOnInit() {
    //Get todos from DB
    this.todos = [
        {
          id: 1,
          title: 'Task 1',
          text: 'My task 1',
          complete: false
        },
        {
          id: 2,
          title: 'Task 2',
          text: 'My task 2',
          complete: true
        }
    ];
  }

  //Delete task
  deleteTask(id): void{
      this.todos = this.todos.filter(todo => todo.id !== id);
  }

  //Trackby
  identify = index => index;

  addTodo = () => {
      const { title, text } = this.form.value;

      // values from [(ngModel)]
      const newTodo = {
          id: this.todos.length + 1,
          title: this.todo.title,
          text: this.todo.text,
          complete: false
      };

      // values from form
      const newTodo1 = {
          id: this.todos.length + 1,
          title,
          text,
          complete: false
      };

      this.todos.unshift(newTodo1);
      this.form.reset();
  }
}
