import {Component, Input, Output, EventEmitter, /*ContentChild, */ViewChild} from '@angular/core';

interface Todo {
  title: string;
  completed: boolean;
}

export class TodoList {
  private todos: Todo[] = [];
  add(todo: Todo) {
    this.todos.push(todo);
  }
  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  set(todo: Todo, index: number) {
    this.todos[index] = todo;
  }
  get(index: number) {
    return this.todos[index];
  }
  getAll() {
    return this.todos;
  }
}


@Component({
  selector: 'todo-item',
  styles: [
    `.completed {
      text-decoration: line-through;
    }`
  ],
  template: `
    <li [class.completed]="todo.completed">
      <input type="checkbox"
        [(ngModel)]="todo.completed"
        (change)="completionChanged(todo)">
      {{todo.title}}
    </li>
  `
})
export class TodoItemComponent {
  @Output('onChange') onCompletionChange = new EventEmitter<Todo>();
  @Input('todoItem') todo: Todo;
  completionChanged(todo: Todo) {
    this.onCompletionChange.emit(todo);
  }
}

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" [(ngModel)]="title">
    <button (click)="addTodo()">Add</button>
  `
})
export class TodoInputComponent {
  title: string;
  @Output() onTodo = new EventEmitter<Todo>();
  addTodo() {
    this.onTodo.emit({
      title: this.title,
      completed: false
    });
    this.title = '';
  }
}

@Component({
  selector: 'app-footer',
  template: '<ng-content></ng-content>'
})
export class FooterComponent {
  constructor(private todos: TodoList) {}
}


@Component({
  selector: 'todo-app',
  viewProviders: [TodoList],
  styles: [`
    .u-margin {
        margin-top: 0;
    }
    section h4 { margin: 0 }
  `],
  template: `
    <section>
      Add todo:
      <todo-input (onTodo)="addTodo($event)"></todo-input>
    </section>
    <section>
      <h4 *ngIf="todos.getAll().length">Todo list</h4>
      <ul ngClass="u-margin">
        <todo-item *ngFor="let todo of todos.getAll()" [todoItem]="todo" (onChange)="addTodo($event)">
        </todo-item>
      </ul>
    </section>
    <ng-content select="app-footer"></ng-content>
  `
})
export class TodoAppComponent {
  @ViewChild(TodoInputComponent)
  input: TodoInputComponent;

  constructor(private todos: TodoList) {}

  addTodo(todo: Todo) {
    this.todos.add(todo);
  }

  ngAfterViewInit() {
    // console.log(this.input);
  }
}


@Component({
  selector: 'demo-app',
  styles: [
    'todo-app { margin-top: 20px; margin-left: 20px; }'
  ],
  template: `
    <content>
      <todo-app>
        <app-footer>
          <small>Yet another todo app!</small>
        </app-footer>
      </todo-app>
    </content>
  `
})
export class MainComponent {}

