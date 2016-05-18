import {Component, Input} from 'angular2/core';
import {Todo} from './todo'

@Component({
    selector: 'todo-app',
    template: `<h1>todo</h1>
    <span>{{RemaingItems}}  of {{todoItems.length}} remaining </span>
    <ul>
        <li *ngFor="#todo of todoItems"><input type='checkbox' [(ngModel)]=todo.done > {{todo.text}}</li>
    </ul>`

})

export class TodoComponent {
    //this Input was imported above
    @Input() todoItems: Todo[];
    
    get RemaingItems(){
        return this.todoItems.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }
}
