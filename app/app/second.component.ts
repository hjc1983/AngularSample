import {Component} from 'angular2/core';
import {TodoComponent} from './todo.Components';
import {Todo} from './todo'
import {TodoFormComponent} from './todoform.Components';

@Component({
    selector: 'second-app',
    template: `<todo-app [todoItems]="todos"></todo-app>
    <todoform-app (newTask)="addTask($event)"><todoform-app>
    `,
    directives: [TodoComponent, TodoFormComponent]
})
export class SecondComponent { 
    //fname:string = "Rob";
    todos: Todo[] = [{ text: 'hi', done: false }, { text: 'www', done: true }]
    
    addTask(task:Todo){
        this.todos.push(task)
    }
}
