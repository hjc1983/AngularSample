import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo'

@Component({
    selector: 'todoform-app',
    template: `<form>
    <div class='col-sm-6 input-group'>
        <input type="text" class='form-control' [(ngModel)]='task' size='30' placeholder='input new job...' /> 
        <span class='input-group-btn'><button class="btn btn-primary" (click)="addTodo()"  type='submit'>Add</button></span>
    </div>
    </form>`

})

export class TodoFormComponent {
    task: string='';
    @Output() newTask = new EventEmitter<Todo>(); //imported above
    
   addTodo(){  //bind to button
       
       if(this.task){
           console.log('new => '+this.task);
           this.newTask.next({text:this.task, done:false})
       }
       this.task='';  //clear out entered
   }
}
