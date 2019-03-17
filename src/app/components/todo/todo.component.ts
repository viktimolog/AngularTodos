import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {
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
}
